import jsPDF from "jspdf";
import React from "react";

const Blog = () => {
  const pdfDownload = () => {
    const pdfDoc = new jsPDF("p", "pt", "a4");
    const targetDiv = document.getElementById("pdfDiv");
    pdfDoc.html(targetDiv, {
      callback: function (pdf) {
        pdf.save("Blog.pdf");
      },
    });
  };

  return (
    <div className="container mx-auto">
      <section className="bg-base-800 text-gray-800">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <div className="w-1/2 mx-auto" id="pdfDiv">
            <h2 className="pb-4 text-4xl font-bold leading-none text-center sm:text-5xl">
              Blog
            </h2>
            <p className="mb-12 text-sm font-medium tracking-wider text-center uppercase">
              Things that you might want to know
            </p>
            <div className="grid gap-10 md:gap-8 sm:p-3 lg:px-3 xl:px-3">
              <div>
                <h3 className="font-semibold">
                  1. Tell us the differences between uncontrolled and controlled
                  components.
                </h3>
                <p className="mt-1 text-gray-400">
                  Components that manage their own state internally is known as
                  uncontrolled component. While controlled components are
                  components that are controlled by the parents.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  2. How to validate React props using PropTypes
                </h3>
                <p className="mt-1 text-gray-400">
                  You can validate the props using proptypes determining their
                  data types. The following datatypes are available for you to
                  check.{" "}
                  <ul>
                    <li>PropTypes.any</li>
                    <li>PropTypes.bool</li>
                    <li>PropTypes.number</li>
                    <li>PropTypes.string</li>
                    <li>PropTypes.func</li>
                    <li>PropTypes.array</li>
                    <li>PropTypes.object</li>
                    <li>PropTypes.symbol</li>
                  </ul>
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  3. Tell us the difference between nodejs and express js.
                </h3>
                <p className="mt-1 text-gray-400">
                  The main difference is that express js is build on node js
                  where as node js is build on Google's V8 Engine.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">
                  4. What is a custom hook, and why will you create a custom
                  hook?
                </h3>
                <p className="mt-1 text-gray-400">
                  Custom hooks are hooks that are not build in and are created
                  by developers based on projects. The main reason why one would
                  create such custom hooks is for reusability as well as their
                  ability to reduce code and save time.
                </p>
              </div>
            </div>
          </div>
          <button
            className="btn btn-primary my-20 w-60 mx-auto text-white"
            onClick={pdfDownload}
          >
            Download PDF
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
