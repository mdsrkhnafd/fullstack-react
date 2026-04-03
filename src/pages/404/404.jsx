import "./404.css";

export default function Error404() {
  return (
    <div className="error404-page">
      <div className="main">
        <div className="card">
          <h1>Page not found</h1>
          <p>
            Looks like you've followed a broken link or entered a URL that
            doesn't exist on this site.
          </p>
          <hr />
          <p className="your-site">
            If this is your site, and you weren't expecting a 404 for this path,
            please visit Netlify's{" "}
            <a href="https://answers.netlify.com/t/support-guide-i-ve-deployed-my-site-but-i-still-see-page-not-found/125?utm_source=404page&utm_campaign=community_tracking">
              &ldquo;page not found&rdquo; support guide
            </a>{" "}
            for troubleshooting tips.
          </p>
        </div>
      </div>
    </div>
  );
}
