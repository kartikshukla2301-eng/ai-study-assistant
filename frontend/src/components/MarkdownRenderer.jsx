import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeBlock({ className, children }) {
  const [copied, setCopied] = useState(false);
  const language = /language-(\w+)/.exec(className || "")?.[1] || "text";
  const code = String(children).replace(/\n$/, "");

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <div className="my-3 overflow-hidden rounded-lg border border-white/10 bg-[var(--code)]">
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 text-xs text-[var(--muted)]">
        <span>{language}</span>
        <button className="flex items-center gap-1 rounded-md px-2 py-1 hover:bg-white/10" onClick={copy}>
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <SyntaxHighlighter language={language} style={oneDark} customStyle={{ margin: 0, background: "transparent", fontSize: "0.9rem" }}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default function MarkdownRenderer({ content }) {
  return (
    <div className="markdown-body max-w-none leading-7">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ inline, className, children, ...props }) {
            if (inline) return <code {...props}>{children}</code>;
            return <CodeBlock className={className}>{children}</CodeBlock>;
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
