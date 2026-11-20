import sanitizeHtml from 'sanitize-html';

// microCMS のリッチエディタが出力する HTML だけを許可する。
// ビルド時（getStaticProps）にだけ実行されるので、クライアントのバンドルには含まれない。
const options: sanitizeHtml.IOptions = {
  allowedTags: [...sanitizeHtml.defaults.allowedTags, 'img'],
  allowedAttributes: {
    '*': ['lang', 'dir', 'style'],
    a: ['href', 'name', 'target', 'rel'],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height', 'loading'],
    h1: ['id'],
    h2: ['id'],
    h3: ['id'],
    h4: ['id'],
    h5: ['id'],
    h6: ['id'],
    blockquote: ['class', 'data-*'],
    code: ['class'],
    td: ['colspan', 'rowspan'],
    th: ['colspan', 'rowspan'],
  },
  allowedClasses: {
    // ツイート埋め込み（widgets.js は _document.tsx で読み込んでいる）
    blockquote: ['twitter-tweet'],
    // コードブロックの言語指定
    code: ['language-*'],
  },
  allowedStyles: {
    '*': {
      'text-align': [/^(left|right|center|justify)$/],
    },
  },
  allowedSchemes: ['http', 'https', 'mailto'],
  allowProtocolRelative: false,
  transformTags: {
    a: (tagName, attribs) => ({
      tagName,
      attribs: attribs.target === '_blank' ? { ...attribs, rel: 'noopener noreferrer' } : attribs,
    }),
  },
};

export function sanitizeBody(html: string): string {
  return sanitizeHtml(html, options);
}
