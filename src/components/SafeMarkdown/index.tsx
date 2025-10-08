import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
//Ela impede ataques XSS (Cross-Site Scripting).Quando o Markdown é convertido em HTML, alguém malicioso poderia tentar injetar código perigoso
import remarkGfm from "remark-gfm";
//versão estendida do Markdown tradicional, com recursos extras.
import clsx from "clsx";

type SafeMarkdownProps = {
  markdown: string;
};

export function SafeMarkdown({ markdown }: SafeMarkdownProps) {
  return (
    <div
      className={clsx(
        "prose prose-slate",
        "w-full max-w-none",
        "overflow-hidden",
        "prose-a:transition",
        "prose-a:no-underline",
        "prose-a:text-blue-500",
        "prose-a:hover:text-blue-700",
        "prose-a:hover:underline",
        "prose-img:mx-auto",
        "lg:prose-lg"
      )}
    >
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
