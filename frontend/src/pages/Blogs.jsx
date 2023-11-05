import { blogData } from "./Data";
import Navbar from "../components/common/Navbar";

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20 pt-5">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {blogData.map((post) => (
            <div
              key={post.id}
              className="overflow-hidden transition-shadow duration-300 rounded-md shadow-md"
            >
              <img
                src={post.imageSrc}
                className="object-cover w-full h-64"
                alt=""
              />
              <div className="p-5 border border-t-0 rounded-md">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <a
                    href="/"
                    className="transition-colors duration-200 text-primary hover:text-deep-purple-accent-700"
                    aria-label="Category"
                    title={post.category}
                  >
                    {post.category}
                  </a>
                  <span className="text-gray-600">— {post.date}</span>
                </p>
                <a
                  href="/"
                  aria-label="Category"
                  title={post.title}
                  className="inline-block mb-3 text-2xl leading-8 font-bold transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  {post.title}
                </a>
                <p className="mb-2 text-gray-700">{post.content}</p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
