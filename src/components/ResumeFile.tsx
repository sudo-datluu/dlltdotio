import React from 'react';
import { useCallback, useState } from 'react';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { resumeLink } from '../constants';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();
const maxWidth = 800;

const resizeObserverOptions = {};

const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeLink;
    link.download = 'David-Resume.pdf';
    link.click();
}

type PDFFile = string | File | null;

const ResumeFile = () => {
    const [file, setFile] = useState<PDFFile>(resumeLink);
    const [numPages, setNumPages] = useState<number>();
    const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
    const [containerWidth, setContainerWidth] = useState<number>();

    const onResize = useCallback<ResizeObserverCallback>((entries) => {
        const [entry] = entries;
    
        if (entry) {
          setContainerWidth(entry.contentRect.width);
        }
      }, []);
    
    useResizeObserver(containerRef, resizeObserverOptions, onResize);
    function onFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const { files } = event.target;
    
        const nextFile = files?.[0];
    
        if (nextFile) {
          setFile(nextFile);
        }
    }
    
    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

  return (
    <div className='resume-file-container' ref={setContainerRef}>
        <Document className='resume-file-container-document rounded-md' file={file} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (_el, index) => (
                <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    width={containerWidth ? Math.max(containerWidth, maxWidth) : maxWidth}
                />
            ))}
        </Document>

        <button className='w-full mt-6 z-0 btn' onClick={handleDownloadResume}>
            <span className='relative flex'>
                <img src="/assets/download.png" className='download-btn-icon w-5 h-5'/>
            </span>
            Download
        </button>
    </div>
  )
}

export default ResumeFile