"use client"
import { useEffect, useRef, useState } from "react"
import "../resize/index.css"
const Resizer = () => {
  const [gridArea, setGridArea] = useState(0)
  const containerRef = useRef<HTMLElement | null>(null)
  const griderRef = useRef<HTMLElement>(null)
  const resizeRef = useRef<HTMLElement>(null)
  // useEffect(() => {
  //   const containerWidth = containerRef.current?.offsetWidth;
  //   console.log(griderRef.current?.children);


  //   const containerPadding = 20 * 2 + 60; // Assuming padding is 20px on both sides

  //   // Calculate the available width for the grid items
  //   const availableWidth = containerWidth! - containerPadding;

  //   // Get the number of columns in the grid
  //   const numColumns = 4; // Assuming 4 columns

  //   // Calculate the width of each grid item
  //   const gridItemWidth = availableWidth / numColumns;

  //   // Get the height of each grid item (assuming grid-auto-rows is 96px)
  //   const gridItemHeight = 96;

  //   console.log(gridItemWidth, gridItemHeight);

  //   return () => {

  //   }
  // }, [])

  // useEffect(() => {
  //   const container = griderRef.current;

  //   // Create a new ResizeObserver
  //   const resizeObserver = new ResizeObserver(entries => {
  //     // Loop through each observed entry
  //     entries.forEach(entry => {
  //       const targetElement = entry.target;
  //       // Perform actions when resizing occurs
  //       console.log('Resizing occurred:', targetElement);
  //       // Add your logic here to handle resizing of the target element
  //     });
  //   });

  //   // Start observing the container element
  //   if (container) {
  //     resizeObserver.observe(container);
  //   }

  //   // Cleanup function to disconnect the ResizeObserver when the component unmounts
  //   return () => {
  //     resizeObserver.disconnect();
  //   };
  // }, []);

  useEffect(() => {
    const containerWidth = containerRef.current?.offsetWidth;
    const grider = griderRef.current;
    const containerPadding = 20 * 2 + 60;
    const availableWidth = containerWidth! - containerPadding;

    const cellWidth = availableWidth / 4; // Assuming 4 columns
    const cellHeight = 96; // Assuming fixed row height

    // const columnStart = Math.floor((rect.left - containerRect.left) / cellWidth) + 1;
    // const columnEnd = Math.ceil((rect.right - containerRect.left) / cellWidth) + 1;
    // const rowStart = Math.floor((rect.top - containerRect.top) / cellHeight) + 1;
    // const rowEnd = Math.ceil((rect.bottom - containerRect.top) / cellHeight) + 1;

    const resizeObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {
        const targetElement = entry.target as HTMLElement;
        // console.log('Resizing occurred:', targetElement.getBoundingClientRect());
        // Perform actions for resizing of the target element (gridItem)
        // For example, you can update state or trigger other functions
        const columnStart = Math.floor((targetElement.getBoundingClientRect().left - containerRef.current!.getBoundingClientRect().left) / cellWidth) + 1;
        const columnEnd = Math.ceil((targetElement.getBoundingClientRect().right - containerRef.current!.getBoundingClientRect().left) / cellWidth) + 1;
        const rowStart = Math.floor((targetElement.getBoundingClientRect().top - containerRef.current!.getBoundingClientRect().top) / cellHeight) + 1;
        const rowEnd = Math.ceil((targetElement.getBoundingClientRect().bottom - containerRef.current!.getBoundingClientRect().top) / cellHeight) + 1;
        console.log("row start", rowStart, "column-start", columnStart, "row-end", rowEnd, "column end", columnEnd);
        console.log(targetElement.clientWidth);
        targetElement.style.width = "100%"
        targetElement.style.height = "100%"
        // return targetElement.style.gridArea = `${rowStart} / ${columnStart} / span ${rowEnd} / span ${columnEnd}`
        // 1 / 1 / span 1 / span 1;

      });
    });

    // Start observing each gridItem element
    if (grider) {
      grider.querySelectorAll('.gridItem').forEach(gridItem => {
        resizeObserver.observe(gridItem);
      });
    }

    // Cleanup function to disconnect the ResizeObserver when the component unmounts
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  console.log(gridArea);


  return (
    <>
      <main className="flex wrapper">
        <div className="both"></div>
        <div className="both"></div>
        <div className="both"></div>
        <div className="both"></div>
        <div className="both"></div>
      </main>




      {/* <section className="containers" ref={containerRef}>
        <main className="grider" ref={griderRef}>
          <div className="gridItem one"></div>
          <div className="gridItem two"></div>
          <div className="gridItem three"></div>
          <div className="gridItem four"></div>
          <div className="gridItem five"></div>
        </main>
      </section> */}
    </>
  )
}

export default Resizer;

