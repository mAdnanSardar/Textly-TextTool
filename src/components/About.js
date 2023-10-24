export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "grey" : "white",
  };

  return (
    <>
      <div className="container" style={myStyle}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                style={myStyle}
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
              <strong>  What Sets Us Apart </strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>User-Friendly Interface:</strong> Our website offers a
                simple and intuitive user interface, making it easy for both
                beginners and experts to manipulate text effortlessly.
              </div>
              <div className="accordion-body" style={myStyle}>
                <strong>Endless Possibilities:</strong> With a wide range of
                text manipulation options, you can format, convert, and
                transform text in numerous ways. From simple tasks like
                capitalization and word counting to complex operations like
                encryption and decryption, our website has got you covered.
              </div>
              <div className="accordion-body" style={myStyle}>
                <strong>Customization</strong> Your text, your rules! We provide
                a range of parameters that allow you to tailor your text just
                the way you want it. Adjust fonts, colors, and formatting to
                create text that truly represents your unique style.
              </div>
              <div className="accordion-body" style={myStyle}>
                <strong>Efficiency:</strong> Save time and effort by automating
                repetitive tasks. Whether it's generating Lorem Ipsum text,
                translating between languages, or sorting content, our tools
                streamline your work.
              </div>
              <div className="accordion-body" style={myStyle}>
                <strong>Privacy and Security:</strong> We take your data
                security seriously. Your text is processed securely, and we
                don't store any of your input, ensuring your privacy.
              </div>
              <div className="accordion-body" style={myStyle}>
                <strong>Accessible Anywhere:</strong> Our website is accessible
                from any device with an internet connection. Whether you're at
                home, in the office, or on the go, you can manipulate text with
                ease.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                style={myStyle}
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
              <strong>  Who Can Benefit: </strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body">
                <strong>Writers and Bloggers:</strong> Create and refine your
                content with our text manipulation tools, ensuring your words
                have the impact you desire.
              </div>
              <div className="accordion-body">
                <strong>Students:</strong> Simplify academic tasks, such as
                paraphrasing, formatting citations, and generating random text
                for design projects.
              </div>
              <div className="accordion-body">
                <strong>Business Professionals: </strong>Craft polished and
                professional documents, emails, and marketing materials with
                ease.
              </div>
              <div className="accordion-body">
                <strong>Developers:</strong> Save time coding by using our text
                manipulation functions to automate text-related processes.
              </div>
              <div className="accordion-body">
                <strong>Language Enthusiasts:</strong> Explore language in
                creative and intriguing ways, from translations to anagrams and
                beyond.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
              <strong>  Join Our Community: </strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                We invite you to join our growing community of users who are
                passionate about the art of text manipulation. Share your
                feedback, tips, and innovative uses of our tools. Your insights
                will help us improve and expand our offerings to meet your
                evolving needs. So, whether you're looking to enhance your
                writing, streamline your work, or simply have fun with words,
                our Text Manipulation website is the place to be. Start
                exploring, experimenting, and creating text like never before.
                Your words, your way!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
