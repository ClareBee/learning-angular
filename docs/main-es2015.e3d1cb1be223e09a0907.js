(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function(e, t, n) {
      e.exports = n('zUnb');
    },
    DlQD: function(e, t, n) {
      !(function(t) {
        'use strict';
        var n = {
          newline: /^\n+/,
          code: /^( {4}[^\n]+\n*)+/,
          fences: /^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
          hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
          heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
          blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
          list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
          html:
            '^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))',
          def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
          nptable: m,
          table: m,
          lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
          _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
          text: /^[^\n]+/,
        };
        function r(e) {
          (this.tokens = []),
            (this.tokens.links = Object.create(null)),
            (this.options = e || C.defaults),
            (this.rules = n.normal),
            this.options.pedantic
              ? (this.rules = n.pedantic)
              : this.options.gfm && (this.rules = n.gfm);
        }
        (n._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/),
          (n._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/),
          (n.def = d(n.def)
            .replace('label', n._label)
            .replace('title', n._title)
            .getRegex()),
          (n.bullet = /(?:[*+-]|\d{1,9}\.)/),
          (n.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/),
          (n.item = d(n.item, 'gm')
            .replace(/bull/g, n.bullet)
            .getRegex()),
          (n.list = d(n.list)
            .replace(/bull/g, n.bullet)
            .replace(
              'hr',
              '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))'
            )
            .replace('def', '\\n+(?=' + n.def.source + ')')
            .getRegex()),
          (n._tag =
            'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul'),
          (n._comment = /<!--(?!-?>)[\s\S]*?-->/),
          (n.html = d(n.html, 'i')
            .replace('comment', n._comment)
            .replace('tag', n._tag)
            .replace(
              'attribute',
              / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
            )
            .getRegex()),
          (n.paragraph = d(n._paragraph)
            .replace('hr', n.hr)
            .replace('heading', ' {0,3}#{1,6} +')
            .replace('|lheading', '')
            .replace('blockquote', ' {0,3}>')
            .replace('fences', ' {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n')
            .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
            .replace(
              'html',
              '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)'
            )
            .replace('tag', n._tag)
            .getRegex()),
          (n.blockquote = d(n.blockquote)
            .replace('paragraph', n.paragraph)
            .getRegex()),
          (n.normal = y({}, n)),
          (n.gfm = y({}, n.normal, {
            nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
            table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/,
          })),
          (n.pedantic = y({}, n.normal, {
            html: d(
              '^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))'
            )
              .replace('comment', n._comment)
              .replace(
                /tag/g,
                '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b'
              )
              .getRegex(),
            def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
            heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
            fences: m,
            paragraph: d(n.normal._paragraph)
              .replace('hr', n.hr)
              .replace('heading', ' *#{1,6} *[^\n]')
              .replace('lheading', n.lheading)
              .replace('blockquote', ' {0,3}>')
              .replace('|fences', '')
              .replace('|list', '')
              .replace('|html', '')
              .getRegex(),
          })),
          (r.rules = n),
          (r.lex = function(e, t) {
            return new r(t).lex(e);
          }),
          (r.prototype.lex = function(e) {
            return (
              (e = e
                .replace(/\r\n|\r/g, '\n')
                .replace(/\t/g, '    ')
                .replace(/\u00a0/g, ' ')
                .replace(/\u2424/g, '\n')),
              this.token(e, !0)
            );
          }),
          (r.prototype.token = function(e, t) {
            var r, s, l, i, o, a, u, h, d, p, g, f, m, y, _, w;
            for (e = e.replace(/^ +$/gm, ''); e; )
              if (
                ((l = this.rules.newline.exec(e)) &&
                  ((e = e.substring(l[0].length)),
                  l[0].length > 1 && this.tokens.push({ type: 'space' })),
                (l = this.rules.code.exec(e)))
              ) {
                var C = this.tokens[this.tokens.length - 1];
                (e = e.substring(l[0].length)),
                  C && 'paragraph' === C.type
                    ? (C.text += '\n' + l[0].trimRight())
                    : ((l = l[0].replace(/^ {4}/gm, '')),
                      this.tokens.push({
                        type: 'code',
                        codeBlockStyle: 'indented',
                        text: this.options.pedantic ? l : b(l, '\n'),
                      }));
              } else if ((l = this.rules.fences.exec(e)))
                (e = e.substring(l[0].length)),
                  this.tokens.push({
                    type: 'code',
                    lang: l[2] ? l[2].trim() : l[2],
                    text: l[3] || '',
                  });
              else if ((l = this.rules.heading.exec(e)))
                (e = e.substring(l[0].length)),
                  this.tokens.push({
                    type: 'heading',
                    depth: l[1].length,
                    text: l[2],
                  });
              else if (
                (l = this.rules.nptable.exec(e)) &&
                (a = {
                  type: 'table',
                  header: v(l[1].replace(/^ *| *\| *$/g, '')),
                  align: l[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                  cells: l[3] ? l[3].replace(/\n$/, '').split('\n') : [],
                }).header.length === a.align.length
              ) {
                for (
                  e = e.substring(l[0].length), g = 0;
                  g < a.align.length;
                  g++
                )
                  a.align[g] = /^ *-+: *$/.test(a.align[g])
                    ? 'right'
                    : /^ *:-+: *$/.test(a.align[g])
                    ? 'center'
                    : /^ *:-+ *$/.test(a.align[g])
                    ? 'left'
                    : null;
                for (g = 0; g < a.cells.length; g++)
                  a.cells[g] = v(a.cells[g], a.header.length);
                this.tokens.push(a);
              } else if ((l = this.rules.hr.exec(e)))
                (e = e.substring(l[0].length)),
                  this.tokens.push({ type: 'hr' });
              else if ((l = this.rules.blockquote.exec(e)))
                (e = e.substring(l[0].length)),
                  this.tokens.push({ type: 'blockquote_start' }),
                  (l = l[0].replace(/^ *> ?/gm, '')),
                  this.token(l, t),
                  this.tokens.push({ type: 'blockquote_end' });
              else if ((l = this.rules.list.exec(e))) {
                for (
                  e = e.substring(l[0].length),
                    this.tokens.push(
                      (u = {
                        type: 'list_start',
                        ordered: (y = (i = l[2]).length > 1),
                        start: y ? +i : '',
                        loose: !1,
                      })
                    ),
                    h = [],
                    r = !1,
                    m = (l = l[0].match(this.rules.item)).length,
                    g = 0;
                  g < m;
                  g++
                )
                  (p = (a = l[g]).length),
                    ~(a = a.replace(/^ *([*+-]|\d+\.) */, '')).indexOf('\n ') &&
                      ((p -= a.length),
                      (a = a.replace(
                        this.options.pedantic
                          ? /^ {1,4}/gm
                          : new RegExp('^ {1,' + p + '}', 'gm'),
                        ''
                      ))),
                    g !== m - 1 &&
                      ((o = n.bullet.exec(l[g + 1])[0]),
                      (i.length > 1
                        ? 1 === o.length
                        : o.length > 1 ||
                          (this.options.smartLists && o !== i)) &&
                        ((e = l.slice(g + 1).join('\n') + e), (g = m - 1))),
                    (s = r || /\n\n(?!\s*$)/.test(a)),
                    g !== m - 1 &&
                      ((r = '\n' === a.charAt(a.length - 1)), s || (s = r)),
                    s && (u.loose = !0),
                    (w = void 0),
                    (_ = /^\[[ xX]\] /.test(a)) &&
                      ((w = ' ' !== a[1]), (a = a.replace(/^\[[ xX]\] +/, ''))),
                    h.push(
                      (d = {
                        type: 'list_item_start',
                        task: _,
                        checked: w,
                        loose: s,
                      })
                    ),
                    this.tokens.push(d),
                    this.token(a, !1),
                    this.tokens.push({ type: 'list_item_end' });
                if (u.loose)
                  for (m = h.length, g = 0; g < m; g++) h[g].loose = !0;
                this.tokens.push({ type: 'list_end' });
              } else if ((l = this.rules.html.exec(e)))
                (e = e.substring(l[0].length)),
                  this.tokens.push({
                    type: this.options.sanitize ? 'paragraph' : 'html',
                    pre:
                      !this.options.sanitizer &&
                      ('pre' === l[1] || 'script' === l[1] || 'style' === l[1]),
                    text: this.options.sanitize
                      ? this.options.sanitizer
                        ? this.options.sanitizer(l[0])
                        : c(l[0])
                      : l[0],
                  });
              else if (t && (l = this.rules.def.exec(e)))
                (e = e.substring(l[0].length)),
                  l[3] && (l[3] = l[3].substring(1, l[3].length - 1)),
                  (f = l[1].toLowerCase().replace(/\s+/g, ' ')),
                  this.tokens.links[f] ||
                    (this.tokens.links[f] = { href: l[2], title: l[3] });
              else if (
                (l = this.rules.table.exec(e)) &&
                (a = {
                  type: 'table',
                  header: v(l[1].replace(/^ *| *\| *$/g, '')),
                  align: l[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                  cells: l[3] ? l[3].replace(/\n$/, '').split('\n') : [],
                }).header.length === a.align.length
              ) {
                for (
                  e = e.substring(l[0].length), g = 0;
                  g < a.align.length;
                  g++
                )
                  a.align[g] = /^ *-+: *$/.test(a.align[g])
                    ? 'right'
                    : /^ *:-+: *$/.test(a.align[g])
                    ? 'center'
                    : /^ *:-+ *$/.test(a.align[g])
                    ? 'left'
                    : null;
                for (g = 0; g < a.cells.length; g++)
                  a.cells[g] = v(
                    a.cells[g].replace(/^ *\| *| *\| *$/g, ''),
                    a.header.length
                  );
                this.tokens.push(a);
              } else if ((l = this.rules.lheading.exec(e)))
                (e = e.substring(l[0].length)),
                  this.tokens.push({
                    type: 'heading',
                    depth: '=' === l[2].charAt(0) ? 1 : 2,
                    text: l[1],
                  });
              else if (t && (l = this.rules.paragraph.exec(e)))
                (e = e.substring(l[0].length)),
                  this.tokens.push({
                    type: 'paragraph',
                    text:
                      '\n' === l[1].charAt(l[1].length - 1)
                        ? l[1].slice(0, -1)
                        : l[1],
                  });
              else if ((l = this.rules.text.exec(e)))
                (e = e.substring(l[0].length)),
                  this.tokens.push({ type: 'text', text: l[0] });
              else if (e)
                throw new Error('Infinite loop on byte: ' + e.charCodeAt(0));
            return this.tokens;
          });
        var s = {
          escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
          autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
          url: m,
          tag:
            '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
          link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
          reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
          nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
          strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
          em: /^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
          code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
          br: /^( {2,}|\\)\n(?!\s*$)/,
          del: m,
          text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,
        };
        function l(e, t) {
          if (
            ((this.options = t || C.defaults),
            (this.links = e),
            (this.rules = s.normal),
            (this.renderer = this.options.renderer || new i()),
            (this.renderer.options = this.options),
            !this.links)
          )
            throw new Error('Tokens array requires a `links` property.');
          this.options.pedantic
            ? (this.rules = s.pedantic)
            : this.options.gfm &&
              (this.rules = this.options.breaks ? s.breaks : s.gfm);
        }
        function i(e) {
          this.options = e || C.defaults;
        }
        function o() {}
        function a(e) {
          (this.tokens = []),
            (this.token = null),
            (this.options = e || C.defaults),
            (this.options.renderer = this.options.renderer || new i()),
            (this.renderer = this.options.renderer),
            (this.renderer.options = this.options),
            (this.slugger = new u());
        }
        function u() {
          this.seen = {};
        }
        function c(e, t) {
          if (t) {
            if (c.escapeTest.test(e))
              return e.replace(c.escapeReplace, function(e) {
                return c.replacements[e];
              });
          } else if (c.escapeTestNoEncode.test(e))
            return e.replace(c.escapeReplaceNoEncode, function(e) {
              return c.replacements[e];
            });
          return e;
        }
        function h(e) {
          return e.replace(
            /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
            function(e, t) {
              return 'colon' === (t = t.toLowerCase())
                ? ':'
                : '#' === t.charAt(0)
                ? 'x' === t.charAt(1)
                  ? String.fromCharCode(parseInt(t.substring(2), 16))
                  : String.fromCharCode(+t.substring(1))
                : '';
            }
          );
        }
        function d(e, t) {
          return (
            (e = e.source || e),
            (t = t || ''),
            {
              replace: function(t, n) {
                return (
                  (n = (n = n.source || n).replace(/(^|[^\[])\^/g, '$1')),
                  (e = e.replace(t, n)),
                  this
                );
              },
              getRegex: function() {
                return new RegExp(e, t);
              },
            }
          );
        }
        function p(e, t, n) {
          if (e) {
            try {
              var r = decodeURIComponent(h(n))
                .replace(/[^\w:]/g, '')
                .toLowerCase();
            } catch (s) {
              return null;
            }
            if (
              0 === r.indexOf('javascript:') ||
              0 === r.indexOf('vbscript:') ||
              0 === r.indexOf('data:')
            )
              return null;
          }
          t &&
            !f.test(n) &&
            (n = (function(e, t) {
              return (
                g[' ' + e] ||
                  (g[' ' + e] = /^[^:]+:\/*[^/]*$/.test(e)
                    ? e + '/'
                    : b(e, '/', !0)),
                (e = g[' ' + e]),
                '//' === t.slice(0, 2)
                  ? e.replace(/:[\s\S]*/, ':') + t
                  : '/' === t.charAt(0)
                  ? e.replace(/(:\/*[^/]*)[\s\S]*/, '$1') + t
                  : e + t
              );
            })(t, n));
          try {
            n = encodeURI(n).replace(/%25/g, '%');
          } catch (s) {
            return null;
          }
          return n;
        }
        (s._punctuation = '!"#$%&\'()*+,\\-./:;<=>?@\\[^_{|}~'),
          (s.em = d(s.em)
            .replace(/punctuation/g, s._punctuation)
            .getRegex()),
          (s._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
          (s._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
          (s._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
          (s.autolink = d(s.autolink)
            .replace('scheme', s._scheme)
            .replace('email', s._email)
            .getRegex()),
          (s._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
          (s.tag = d(s.tag)
            .replace('comment', n._comment)
            .replace('attribute', s._attribute)
            .getRegex()),
          (s._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
          (s._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/),
          (s._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
          (s.link = d(s.link)
            .replace('label', s._label)
            .replace('href', s._href)
            .replace('title', s._title)
            .getRegex()),
          (s.reflink = d(s.reflink)
            .replace('label', s._label)
            .getRegex()),
          (s.normal = y({}, s)),
          (s.pedantic = y({}, s.normal, {
            strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
            link: d(/^!?\[(label)\]\((.*?)\)/)
              .replace('label', s._label)
              .getRegex(),
            reflink: d(/^!?\[(label)\]\s*\[([^\]]*)\]/)
              .replace('label', s._label)
              .getRegex(),
          })),
          (s.gfm = y({}, s.normal, {
            escape: d(s.escape)
              .replace('])', '~|])')
              .getRegex(),
            _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
            url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
            _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
            del: /^~+(?=\S)([\s\S]*?\S)~+/,
            text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/,
          })),
          (s.gfm.url = d(s.gfm.url, 'i')
            .replace('email', s.gfm._extended_email)
            .getRegex()),
          (s.breaks = y({}, s.gfm, {
            br: d(s.br)
              .replace('{2,}', '*')
              .getRegex(),
            text: d(s.gfm.text)
              .replace('\\b_', '\\b_| {2,}\\n')
              .replace(/\{2,\}/g, '*')
              .getRegex(),
          })),
          (l.rules = s),
          (l.output = function(e, t, n) {
            return new l(t, n).output(e);
          }),
          (l.prototype.output = function(e) {
            for (var t, n, r, s, i, o, a = ''; e; )
              if ((i = this.rules.escape.exec(e)))
                (e = e.substring(i[0].length)), (a += c(i[1]));
              else if ((i = this.rules.tag.exec(e)))
                !this.inLink && /^<a /i.test(i[0])
                  ? (this.inLink = !0)
                  : this.inLink && /^<\/a>/i.test(i[0]) && (this.inLink = !1),
                  !this.inRawBlock &&
                  /^<(pre|code|kbd|script)(\s|>)/i.test(i[0])
                    ? (this.inRawBlock = !0)
                    : this.inRawBlock &&
                      /^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0]) &&
                      (this.inRawBlock = !1),
                  (e = e.substring(i[0].length)),
                  (a += this.options.sanitize
                    ? this.options.sanitizer
                      ? this.options.sanitizer(i[0])
                      : c(i[0])
                    : i[0]);
              else if ((i = this.rules.link.exec(e))) {
                var u = _(i[2], '()');
                if (u > -1) {
                  var h = 4 + i[1].length + u;
                  (i[2] = i[2].substring(0, u)),
                    (i[0] = i[0].substring(0, h).trim()),
                    (i[3] = '');
                }
                (e = e.substring(i[0].length)),
                  (this.inLink = !0),
                  (r = i[2]),
                  this.options.pedantic
                    ? (t = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r))
                      ? ((r = t[1]), (s = t[3]))
                      : (s = '')
                    : (s = i[3] ? i[3].slice(1, -1) : ''),
                  (r = r.trim().replace(/^<([\s\S]*)>$/, '$1')),
                  (a += this.outputLink(i, {
                    href: l.escapes(r),
                    title: l.escapes(s),
                  })),
                  (this.inLink = !1);
              } else if (
                (i = this.rules.reflink.exec(e)) ||
                (i = this.rules.nolink.exec(e))
              ) {
                if (
                  ((e = e.substring(i[0].length)),
                  (t = (i[2] || i[1]).replace(/\s+/g, ' ')),
                  !(t = this.links[t.toLowerCase()]) || !t.href)
                ) {
                  (a += i[0].charAt(0)), (e = i[0].substring(1) + e);
                  continue;
                }
                (this.inLink = !0),
                  (a += this.outputLink(i, t)),
                  (this.inLink = !1);
              } else if ((i = this.rules.strong.exec(e)))
                (e = e.substring(i[0].length)),
                  (a += this.renderer.strong(
                    this.output(i[4] || i[3] || i[2] || i[1])
                  ));
              else if ((i = this.rules.em.exec(e)))
                (e = e.substring(i[0].length)),
                  (a += this.renderer.em(
                    this.output(i[6] || i[5] || i[4] || i[3] || i[2] || i[1])
                  ));
              else if ((i = this.rules.code.exec(e)))
                (e = e.substring(i[0].length)),
                  (a += this.renderer.codespan(c(i[2].trim(), !0)));
              else if ((i = this.rules.br.exec(e)))
                (e = e.substring(i[0].length)), (a += this.renderer.br());
              else if ((i = this.rules.del.exec(e)))
                (e = e.substring(i[0].length)),
                  (a += this.renderer.del(this.output(i[1])));
              else if ((i = this.rules.autolink.exec(e)))
                (e = e.substring(i[0].length)),
                  (r =
                    '@' === i[2]
                      ? 'mailto:' + (n = c(this.mangle(i[1])))
                      : (n = c(i[1]))),
                  (a += this.renderer.link(r, null, n));
              else if (this.inLink || !(i = this.rules.url.exec(e))) {
                if ((i = this.rules.text.exec(e)))
                  (e = e.substring(i[0].length)),
                    (a += this.renderer.text(
                      this.inRawBlock
                        ? this.options.sanitize
                          ? this.options.sanitizer
                            ? this.options.sanitizer(i[0])
                            : c(i[0])
                          : i[0]
                        : c(this.smartypants(i[0]))
                    ));
                else if (e)
                  throw new Error('Infinite loop on byte: ' + e.charCodeAt(0));
              } else {
                if ('@' === i[2]) r = 'mailto:' + (n = c(i[0]));
                else {
                  do {
                    (o = i[0]), (i[0] = this.rules._backpedal.exec(i[0])[0]);
                  } while (o !== i[0]);
                  (n = c(i[0])), (r = 'www.' === i[1] ? 'http://' + n : n);
                }
                (e = e.substring(i[0].length)),
                  (a += this.renderer.link(r, null, n));
              }
            return a;
          }),
          (l.escapes = function(e) {
            return e ? e.replace(l.rules._escapes, '$1') : e;
          }),
          (l.prototype.outputLink = function(e, t) {
            var n = t.href,
              r = t.title ? c(t.title) : null;
            return '!' !== e[0].charAt(0)
              ? this.renderer.link(n, r, this.output(e[1]))
              : this.renderer.image(n, r, c(e[1]));
          }),
          (l.prototype.smartypants = function(e) {
            return this.options.smartypants
              ? e
                  .replace(/---/g, '\u2014')
                  .replace(/--/g, '\u2013')
                  .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
                  .replace(/'/g, '\u2019')
                  .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
                  .replace(/"/g, '\u201d')
                  .replace(/\.{3}/g, '\u2026')
              : e;
          }),
          (l.prototype.mangle = function(e) {
            if (!this.options.mangle) return e;
            for (var t, n = '', r = e.length, s = 0; s < r; s++)
              (t = e.charCodeAt(s)),
                Math.random() > 0.5 && (t = 'x' + t.toString(16)),
                (n += '&#' + t + ';');
            return n;
          }),
          (i.prototype.code = function(e, t, n) {
            var r = (t || '').match(/\S*/)[0];
            if (this.options.highlight) {
              var s = this.options.highlight(e, r);
              null != s && s !== e && ((n = !0), (e = s));
            }
            return r
              ? '<pre><code class="' +
                  this.options.langPrefix +
                  c(r, !0) +
                  '">' +
                  (n ? e : c(e, !0)) +
                  '</code></pre>\n'
              : '<pre><code>' + (n ? e : c(e, !0)) + '</code></pre>';
          }),
          (i.prototype.blockquote = function(e) {
            return '<blockquote>\n' + e + '</blockquote>\n';
          }),
          (i.prototype.html = function(e) {
            return e;
          }),
          (i.prototype.heading = function(e, t, n, r) {
            return this.options.headerIds
              ? '<h' +
                  t +
                  ' id="' +
                  this.options.headerPrefix +
                  r.slug(n) +
                  '">' +
                  e +
                  '</h' +
                  t +
                  '>\n'
              : '<h' + t + '>' + e + '</h' + t + '>\n';
          }),
          (i.prototype.hr = function() {
            return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
          }),
          (i.prototype.list = function(e, t, n) {
            var r = t ? 'ol' : 'ul';
            return (
              '<' +
              r +
              (t && 1 !== n ? ' start="' + n + '"' : '') +
              '>\n' +
              e +
              '</' +
              r +
              '>\n'
            );
          }),
          (i.prototype.listitem = function(e) {
            return '<li>' + e + '</li>\n';
          }),
          (i.prototype.checkbox = function(e) {
            return (
              '<input ' +
              (e ? 'checked="" ' : '') +
              'disabled="" type="checkbox"' +
              (this.options.xhtml ? ' /' : '') +
              '> '
            );
          }),
          (i.prototype.paragraph = function(e) {
            return '<p>' + e + '</p>\n';
          }),
          (i.prototype.table = function(e, t) {
            return (
              t && (t = '<tbody>' + t + '</tbody>'),
              '<table>\n<thead>\n' + e + '</thead>\n' + t + '</table>\n'
            );
          }),
          (i.prototype.tablerow = function(e) {
            return '<tr>\n' + e + '</tr>\n';
          }),
          (i.prototype.tablecell = function(e, t) {
            var n = t.header ? 'th' : 'td';
            return (
              (t.align
                ? '<' + n + ' align="' + t.align + '">'
                : '<' + n + '>') +
              e +
              '</' +
              n +
              '>\n'
            );
          }),
          (i.prototype.strong = function(e) {
            return '<strong>' + e + '</strong>';
          }),
          (i.prototype.em = function(e) {
            return '<em>' + e + '</em>';
          }),
          (i.prototype.codespan = function(e) {
            return '<code>' + e + '</code>';
          }),
          (i.prototype.br = function() {
            return this.options.xhtml ? '<br/>' : '<br>';
          }),
          (i.prototype.del = function(e) {
            return '<del>' + e + '</del>';
          }),
          (i.prototype.link = function(e, t, n) {
            if (
              null === (e = p(this.options.sanitize, this.options.baseUrl, e))
            )
              return n;
            var r = '<a href="' + c(e) + '"';
            return t && (r += ' title="' + t + '"'), r + '>' + n + '</a>';
          }),
          (i.prototype.image = function(e, t, n) {
            if (
              null === (e = p(this.options.sanitize, this.options.baseUrl, e))
            )
              return n;
            var r = '<img src="' + e + '" alt="' + n + '"';
            return (
              t && (r += ' title="' + t + '"'),
              r + (this.options.xhtml ? '/>' : '>')
            );
          }),
          (i.prototype.text = function(e) {
            return e;
          }),
          (o.prototype.strong = o.prototype.em = o.prototype.codespan = o.prototype.del = o.prototype.text = function(
            e
          ) {
            return e;
          }),
          (o.prototype.link = o.prototype.image = function(e, t, n) {
            return '' + n;
          }),
          (o.prototype.br = function() {
            return '';
          }),
          (a.parse = function(e, t) {
            return new a(t).parse(e);
          }),
          (a.prototype.parse = function(e) {
            (this.inline = new l(e.links, this.options)),
              (this.inlineText = new l(
                e.links,
                y({}, this.options, { renderer: new o() })
              )),
              (this.tokens = e.reverse());
            for (var t = ''; this.next(); ) t += this.tok();
            return t;
          }),
          (a.prototype.next = function() {
            return (this.token = this.tokens.pop()), this.token;
          }),
          (a.prototype.peek = function() {
            return this.tokens[this.tokens.length - 1] || 0;
          }),
          (a.prototype.parseText = function() {
            for (var e = this.token.text; 'text' === this.peek().type; )
              e += '\n' + this.next().text;
            return this.inline.output(e);
          }),
          (a.prototype.tok = function() {
            switch (this.token.type) {
              case 'space':
                return '';
              case 'hr':
                return this.renderer.hr();
              case 'heading':
                return this.renderer.heading(
                  this.inline.output(this.token.text),
                  this.token.depth,
                  h(this.inlineText.output(this.token.text)),
                  this.slugger
                );
              case 'code':
                return this.renderer.code(
                  this.token.text,
                  this.token.lang,
                  this.token.escaped
                );
              case 'table':
                var e,
                  t,
                  n,
                  r,
                  s = '',
                  l = '';
                for (n = '', e = 0; e < this.token.header.length; e++)
                  n += this.renderer.tablecell(
                    this.inline.output(this.token.header[e]),
                    { header: !0, align: this.token.align[e] }
                  );
                for (
                  s += this.renderer.tablerow(n), e = 0;
                  e < this.token.cells.length;
                  e++
                ) {
                  for (
                    t = this.token.cells[e], n = '', r = 0;
                    r < t.length;
                    r++
                  )
                    n += this.renderer.tablecell(this.inline.output(t[r]), {
                      header: !1,
                      align: this.token.align[r],
                    });
                  l += this.renderer.tablerow(n);
                }
                return this.renderer.table(s, l);
              case 'blockquote_start':
                for (l = ''; 'blockquote_end' !== this.next().type; )
                  l += this.tok();
                return this.renderer.blockquote(l);
              case 'list_start':
                l = '';
                for (
                  var i = this.token.ordered, o = this.token.start;
                  'list_end' !== this.next().type;

                )
                  l += this.tok();
                return this.renderer.list(l, i, o);
              case 'list_item_start':
                l = '';
                var a = this.token.loose,
                  u = this.token.checked,
                  c = this.token.task;
                for (
                  this.token.task && (l += this.renderer.checkbox(u));
                  'list_item_end' !== this.next().type;

                )
                  l +=
                    a || 'text' !== this.token.type
                      ? this.tok()
                      : this.parseText();
                return this.renderer.listitem(l, c, u);
              case 'html':
                return this.renderer.html(this.token.text);
              case 'paragraph':
                return this.renderer.paragraph(
                  this.inline.output(this.token.text)
                );
              case 'text':
                return this.renderer.paragraph(this.parseText());
              default:
                var d =
                  'Token with "' + this.token.type + '" type was not found.';
                if (!this.options.silent) throw new Error(d);
                console.log(d);
            }
          }),
          (u.prototype.slug = function(e) {
            var t = e
              .toLowerCase()
              .trim()
              .replace(
                /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
                ''
              )
              .replace(/\s/g, '-');
            if (this.seen.hasOwnProperty(t)) {
              var n = t;
              do {
                this.seen[n]++, (t = n + '-' + this.seen[n]);
              } while (this.seen.hasOwnProperty(t));
            }
            return (this.seen[t] = 0), t;
          }),
          (c.escapeTest = /[&<>"']/),
          (c.escapeReplace = /[&<>"']/g),
          (c.replacements = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
          }),
          (c.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/),
          (c.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g);
        var g = {},
          f = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
        function m() {}
        function y(e) {
          for (var t, n, r = 1; r < arguments.length; r++)
            for (n in (t = arguments[r]))
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e;
        }
        function v(e, t) {
          var n = e
              .replace(/\|/g, function(e, t, n) {
                for (var r = !1, s = t; --s >= 0 && '\\' === n[s]; ) r = !r;
                return r ? '|' : ' |';
              })
              .split(/ \|/),
            r = 0;
          if (n.length > t) n.splice(t);
          else for (; n.length < t; ) n.push('');
          for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, '|');
          return n;
        }
        function b(e, t, n) {
          if (0 === e.length) return '';
          for (var r = 0; r < e.length; ) {
            var s = e.charAt(e.length - r - 1);
            if (s !== t || n) {
              if (s === t || !n) break;
              r++;
            } else r++;
          }
          return e.substr(0, e.length - r);
        }
        function _(e, t) {
          if (-1 === e.indexOf(t[1])) return -1;
          for (var n = 0, r = 0; r < e.length; r++)
            if ('\\' === e[r]) r++;
            else if (e[r] === t[0]) n++;
            else if (e[r] === t[1] && --n < 0) return r;
          return -1;
        }
        function w(e) {
          e &&
            e.sanitize &&
            !e.silent &&
            console.warn(
              'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options'
            );
        }
        function C(e, t, n) {
          if (null == e)
            throw new Error('marked(): input parameter is undefined or null');
          if ('string' != typeof e)
            throw new Error(
              'marked(): input parameter is of type ' +
                Object.prototype.toString.call(e) +
                ', string expected'
            );
          if (n || 'function' == typeof t) {
            n || ((n = t), (t = null)), w((t = y({}, C.defaults, t || {})));
            var s,
              l,
              i = t.highlight,
              o = 0;
            try {
              s = r.lex(e, t);
            } catch (h) {
              return n(h);
            }
            l = s.length;
            var u = function(e) {
              if (e) return (t.highlight = i), n(e);
              var r;
              try {
                r = a.parse(s, t);
              } catch (h) {
                e = h;
              }
              return (t.highlight = i), e ? n(e) : n(null, r);
            };
            if (!i || i.length < 3) return u();
            if ((delete t.highlight, !l)) return u();
            for (; o < s.length; o++)
              !(function(e) {
                'code' !== e.type
                  ? --l || u()
                  : i(e.text, e.lang, function(t, n) {
                      return t
                        ? u(t)
                        : null == n || n === e.text
                        ? --l || u()
                        : ((e.text = n), (e.escaped = !0), void (--l || u()));
                    });
              })(s[o]);
          } else
            try {
              return (
                t && (t = y({}, C.defaults, t)), w(t), a.parse(r.lex(e, t), t)
              );
            } catch (h) {
              if (
                ((h.message +=
                  '\nPlease report this to https://github.com/markedjs/marked.'),
                (t || C.defaults).silent)
              )
                return (
                  '<p>An error occurred:</p><pre>' +
                  c(h.message + '', !0) +
                  '</pre>'
                );
              throw h;
            }
        }
        (m.exec = m),
          (C.options = C.setOptions = function(e) {
            return y(C.defaults, e), C;
          }),
          (C.getDefaults = function() {
            return {
              baseUrl: null,
              breaks: !1,
              gfm: !0,
              headerIds: !0,
              headerPrefix: '',
              highlight: null,
              langPrefix: 'language-',
              mangle: !0,
              pedantic: !1,
              renderer: new i(),
              sanitize: !1,
              sanitizer: null,
              silent: !1,
              smartLists: !1,
              smartypants: !1,
              xhtml: !1,
            };
          }),
          (C.defaults = C.getDefaults()),
          (C.Parser = a),
          (C.parser = a.parse),
          (C.Renderer = i),
          (C.TextRenderer = o),
          (C.Lexer = r),
          (C.lexer = r.lex),
          (C.InlineLexer = l),
          (C.inlineLexer = l.output),
          (C.Slugger = u),
          (C.parse = C),
          (e.exports = C);
      })(this || ('undefined' != typeof window ? window : global));
    },
    zUnb: function(e, t, n) {
      'use strict';
      function r(e) {
        return 'function' == typeof e;
      }
      n.r(t);
      let s = !1;
      const l = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(e) {
          if (e) {
            const e = new Error();
            console.warn(
              'DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' +
                e.stack
            );
          } else
            s &&
              console.log(
                'RxJS: Back to a better error behavior. Thank you. <3'
              );
          s = e;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return s;
        },
      };
      function i(e) {
        setTimeout(() => {
          throw e;
        });
      }
      const o = {
          closed: !0,
          next(e) {},
          error(e) {
            if (l.useDeprecatedSynchronousErrorHandling) throw e;
            i(e);
          },
          complete() {},
        },
        a = Array.isArray || (e => e && 'number' == typeof e.length);
      function u(e) {
        return null !== e && 'object' == typeof e;
      }
      function c(e) {
        return (
          Error.call(this),
          (this.message = e
            ? `${e.length} errors occurred during unsubscription:\n${e
                .map((e, t) => `${t + 1}) ${e.toString()}`)
                .join('\n  ')}`
            : ''),
          (this.name = 'UnsubscriptionError'),
          (this.errors = e),
          this
        );
      }
      c.prototype = Object.create(Error.prototype);
      const h = c;
      let d = (() => {
        class e {
          constructor(e) {
            (this.closed = !1),
              (this._parent = null),
              (this._parents = null),
              (this._subscriptions = null),
              e && (this._unsubscribe = e);
          }
          unsubscribe() {
            let e,
              t = !1;
            if (this.closed) return;
            let {
              _parent: n,
              _parents: s,
              _unsubscribe: l,
              _subscriptions: i,
            } = this;
            (this.closed = !0),
              (this._parent = null),
              (this._parents = null),
              (this._subscriptions = null);
            let o = -1,
              c = s ? s.length : 0;
            for (; n; ) n.remove(this), (n = (++o < c && s[o]) || null);
            if (r(l))
              try {
                l.call(this);
              } catch (d) {
                (t = !0), (e = d instanceof h ? p(d.errors) : [d]);
              }
            if (a(i))
              for (o = -1, c = i.length; ++o < c; ) {
                const n = i[o];
                if (u(n))
                  try {
                    n.unsubscribe();
                  } catch (d) {
                    (t = !0),
                      (e = e || []),
                      d instanceof h ? (e = e.concat(p(d.errors))) : e.push(d);
                  }
              }
            if (t) throw new h(e);
          }
          add(t) {
            let n = t;
            switch (typeof t) {
              case 'function':
                n = new e(t);
              case 'object':
                if (
                  n === this ||
                  n.closed ||
                  'function' != typeof n.unsubscribe
                )
                  return n;
                if (this.closed) return n.unsubscribe(), n;
                if (!(n instanceof e)) {
                  const t = n;
                  (n = new e())._subscriptions = [t];
                }
                break;
              default:
                if (!t) return e.EMPTY;
                throw new Error(
                  'unrecognized teardown ' + t + ' added to Subscription.'
                );
            }
            if (n._addParent(this)) {
              const e = this._subscriptions;
              e ? e.push(n) : (this._subscriptions = [n]);
            }
            return n;
          }
          remove(e) {
            const t = this._subscriptions;
            if (t) {
              const n = t.indexOf(e);
              -1 !== n && t.splice(n, 1);
            }
          }
          _addParent(e) {
            let { _parent: t, _parents: n } = this;
            return (
              t !== e &&
              (t
                ? n
                  ? -1 === n.indexOf(e) && (n.push(e), !0)
                  : ((this._parents = [e]), !0)
                : ((this._parent = e), !0))
            );
          }
        }
        return (
          (e.EMPTY = (function(e) {
            return (e.closed = !0), e;
          })(new e())),
          e
        );
      })();
      function p(e) {
        return e.reduce((e, t) => e.concat(t instanceof h ? t.errors : t), []);
      }
      const g =
        'function' == typeof Symbol
          ? Symbol('rxSubscriber')
          : '@@rxSubscriber_' + Math.random();
      class f extends d {
        constructor(e, t, n) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = o;
              break;
            case 1:
              if (!e) {
                this.destination = o;
                break;
              }
              if ('object' == typeof e) {
                e instanceof f
                  ? ((this.syncErrorThrowable = e.syncErrorThrowable),
                    (this.destination = e),
                    e.add(this))
                  : ((this.syncErrorThrowable = !0),
                    (this.destination = new m(this, e)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0),
                (this.destination = new m(this, e, t, n));
          }
        }
        [g]() {
          return this;
        }
        static create(e, t, n) {
          const r = new f(e, t, n);
          return (r.syncErrorThrowable = !1), r;
        }
        next(e) {
          this.isStopped || this._next(e);
        }
        error(e) {
          this.isStopped || ((this.isStopped = !0), this._error(e));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(e) {
          this.destination.next(e);
        }
        _error(e) {
          this.destination.error(e), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parent: e, _parents: t } = this;
          return (
            (this._parent = null),
            (this._parents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parent = e),
            (this._parents = t),
            this
          );
        }
      }
      class m extends f {
        constructor(e, t, n, s) {
          let l;
          super(), (this._parentSubscriber = e);
          let i = this;
          r(t)
            ? (l = t)
            : t &&
              ((l = t.next),
              (n = t.error),
              (s = t.complete),
              t !== o &&
                (r((i = Object.create(t)).unsubscribe) &&
                  this.add(i.unsubscribe.bind(i)),
                (i.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = i),
            (this._next = l),
            (this._error = n),
            (this._complete = s);
        }
        next(e) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: t } = this;
            l.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
              ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, e);
          }
        }
        error(e) {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this,
              { useDeprecatedSynchronousErrorHandling: n } = l;
            if (this._error)
              n && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
            else if (t.syncErrorThrowable)
              n ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0)) : i(e),
                this.unsubscribe();
            else {
              if ((this.unsubscribe(), n)) throw e;
              i(e);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this;
            if (this._complete) {
              const t = () => this._complete.call(this._context);
              l.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, t), this.unsubscribe())
                : (this.__tryOrUnsub(t), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(e, t) {
          try {
            e.call(this._context, t);
          } catch (n) {
            if ((this.unsubscribe(), l.useDeprecatedSynchronousErrorHandling))
              throw n;
            i(n);
          }
        }
        __tryOrSetError(e, t, n) {
          if (!l.useDeprecatedSynchronousErrorHandling)
            throw new Error('bad call');
          try {
            t.call(this._context, n);
          } catch (r) {
            return l.useDeprecatedSynchronousErrorHandling
              ? ((e.syncErrorValue = r), (e.syncErrorThrown = !0), !0)
              : (i(r), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: e } = this;
          (this._context = null),
            (this._parentSubscriber = null),
            e.unsubscribe();
        }
      }
      const y =
        ('function' == typeof Symbol && Symbol.observable) || '@@observable';
      function v() {}
      function b(...e) {
        return _(e);
      }
      function _(e) {
        return e
          ? 1 === e.length
            ? e[0]
            : function(t) {
                return e.reduce((e, t) => t(e), t);
              }
          : v;
      }
      let w = (() => {
        class e {
          constructor(e) {
            (this._isScalar = !1), e && (this._subscribe = e);
          }
          lift(t) {
            const n = new e();
            return (n.source = this), (n.operator = t), n;
          }
          subscribe(e, t, n) {
            const { operator: r } = this,
              s = (function(e, t, n) {
                if (e) {
                  if (e instanceof f) return e;
                  if (e[g]) return e[g]();
                }
                return e || t || n ? new f(e, t, n) : new f(o);
              })(e, t, n);
            if (
              (s.add(
                r
                  ? r.call(s, this.source)
                  : this.source ||
                    (l.useDeprecatedSynchronousErrorHandling &&
                      !s.syncErrorThrowable)
                  ? this._subscribe(s)
                  : this._trySubscribe(s)
              ),
              l.useDeprecatedSynchronousErrorHandling &&
                s.syncErrorThrowable &&
                ((s.syncErrorThrowable = !1), s.syncErrorThrown))
            )
              throw s.syncErrorValue;
            return s;
          }
          _trySubscribe(e) {
            try {
              return this._subscribe(e);
            } catch (t) {
              l.useDeprecatedSynchronousErrorHandling &&
                ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
                (function(e) {
                  for (; e; ) {
                    const { closed: t, destination: n, isStopped: r } = e;
                    if (t || r) return !1;
                    e = n && n instanceof f ? n : null;
                  }
                  return !0;
                })(e)
                  ? e.error(t)
                  : console.warn(t);
            }
          }
          forEach(e, t) {
            return new (t = C(t))((t, n) => {
              let r;
              r = this.subscribe(
                t => {
                  try {
                    e(t);
                  } catch (s) {
                    n(s), r && r.unsubscribe();
                  }
                },
                n,
                t
              );
            });
          }
          _subscribe(e) {
            const { source: t } = this;
            return t && t.subscribe(e);
          }
          [y]() {
            return this;
          }
          pipe(...e) {
            return 0 === e.length ? this : _(e)(this);
          }
          toPromise(e) {
            return new (e = C(e))((e, t) => {
              let n;
              this.subscribe(
                e => (n = e),
                e => t(e),
                () => e(n)
              );
            });
          }
        }
        return (e.create = t => new e(t)), e;
      })();
      function C(e) {
        if ((e || (e = l.Promise || Promise), !e))
          throw new Error('no Promise impl found');
        return e;
      }
      function x() {
        return (
          Error.call(this),
          (this.message = 'object unsubscribed'),
          (this.name = 'ObjectUnsubscribedError'),
          this
        );
      }
      x.prototype = Object.create(Error.prototype);
      const S = x;
      class k extends d {
        constructor(e, t) {
          super(),
            (this.subject = e),
            (this.subscriber = t),
            (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const e = this.subject,
            t = e.observers;
          if (
            ((this.subject = null),
            !t || 0 === t.length || e.isStopped || e.closed)
          )
            return;
          const n = t.indexOf(this.subscriber);
          -1 !== n && t.splice(n, 1);
        }
      }
      class E extends f {
        constructor(e) {
          super(e), (this.destination = e);
        }
      }
      let T = (() => {
        class e extends w {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [g]() {
            return new E(this);
          }
          lift(e) {
            const t = new A(this, this);
            return (t.operator = e), t;
          }
          next(e) {
            if (this.closed) throw new S();
            if (!this.isStopped) {
              const { observers: t } = this,
                n = t.length,
                r = t.slice();
              for (let s = 0; s < n; s++) r[s].next(e);
            }
          }
          error(e) {
            if (this.closed) throw new S();
            (this.hasError = !0), (this.thrownError = e), (this.isStopped = !0);
            const { observers: t } = this,
              n = t.length,
              r = t.slice();
            for (let s = 0; s < n; s++) r[s].error(e);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new S();
            this.isStopped = !0;
            const { observers: e } = this,
              t = e.length,
              n = e.slice();
            for (let r = 0; r < t; r++) n[r].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(e) {
            if (this.closed) throw new S();
            return super._trySubscribe(e);
          }
          _subscribe(e) {
            if (this.closed) throw new S();
            return this.hasError
              ? (e.error(this.thrownError), d.EMPTY)
              : this.isStopped
              ? (e.complete(), d.EMPTY)
              : (this.observers.push(e), new k(this, e));
          }
          asObservable() {
            const e = new w();
            return (e.source = this), e;
          }
        }
        return (e.create = (e, t) => new A(e, t)), e;
      })();
      class A extends T {
        constructor(e, t) {
          super(), (this.destination = e), (this.source = t);
        }
        next(e) {
          const { destination: t } = this;
          t && t.next && t.next(e);
        }
        error(e) {
          const { destination: t } = this;
          t && t.error && this.destination.error(e);
        }
        complete() {
          const { destination: e } = this;
          e && e.complete && this.destination.complete();
        }
        _subscribe(e) {
          const { source: t } = this;
          return t ? this.source.subscribe(e) : d.EMPTY;
        }
      }
      function N(e) {
        return e && 'function' == typeof e.schedule;
      }
      class O extends f {
        constructor(e, t, n) {
          super(),
            (this.parent = e),
            (this.outerValue = t),
            (this.outerIndex = n),
            (this.index = 0);
        }
        _next(e) {
          this.parent.notifyNext(
            this.outerValue,
            e,
            this.outerIndex,
            this.index++,
            this
          );
        }
        _error(e) {
          this.parent.notifyError(e, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
      const I = e => t => {
          for (let n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
          t.closed || t.complete();
        },
        R = e => t => (
          e
            .then(
              e => {
                t.closed || (t.next(e), t.complete());
              },
              e => t.error(e)
            )
            .then(null, i),
          t
        );
      function P() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      }
      const D = P(),
        V = e => t => {
          const n = e[D]();
          for (;;) {
            const e = n.next();
            if (e.done) {
              t.complete();
              break;
            }
            if ((t.next(e.value), t.closed)) break;
          }
          return (
            'function' == typeof n.return &&
              t.add(() => {
                n.return && n.return();
              }),
            t
          );
        },
        M = e => t => {
          const n = e[y]();
          if ('function' != typeof n.subscribe)
            throw new TypeError(
              'Provided object does not correctly implement Symbol.observable'
            );
          return n.subscribe(t);
        },
        L = e => e && 'number' == typeof e.length && 'function' != typeof e;
      function U(e) {
        return (
          !!e && 'function' != typeof e.subscribe && 'function' == typeof e.then
        );
      }
      const F = e => {
        if (e instanceof w)
          return t =>
            e._isScalar ? (t.next(e.value), void t.complete()) : e.subscribe(t);
        if (e && 'function' == typeof e[y]) return M(e);
        if (L(e)) return I(e);
        if (U(e)) return R(e);
        if (e && 'function' == typeof e[D]) return V(e);
        {
          const t = u(e) ? 'an invalid object' : `'${e}'`;
          throw new TypeError(
            `You provided ${t} where a stream was expected.` +
              ' You can provide an Observable, Promise, Array, or Iterable.'
          );
        }
      };
      function j(e, t, n, r, s = new O(e, n, r)) {
        if (!s.closed) return F(t)(s);
      }
      class $ extends f {
        notifyNext(e, t, n, r, s) {
          this.destination.next(t);
        }
        notifyError(e, t) {
          this.destination.error(e);
        }
        notifyComplete(e) {
          this.destination.complete();
        }
      }
      function H(e, t) {
        return function(n) {
          if ('function' != typeof e)
            throw new TypeError(
              'argument is not a function. Are you looking for `mapTo()`?'
            );
          return n.lift(new z(e, t));
        };
      }
      class z {
        constructor(e, t) {
          (this.project = e), (this.thisArg = t);
        }
        call(e, t) {
          return t.subscribe(new B(e, this.project, this.thisArg));
        }
      }
      class B extends f {
        constructor(e, t, n) {
          super(e),
            (this.project = t),
            (this.count = 0),
            (this.thisArg = n || this);
        }
        _next(e) {
          let t;
          try {
            t = this.project.call(this.thisArg, e, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(t);
        }
      }
      function q(e, t) {
        return new w(
          t
            ? n => {
                const r = new d();
                let s = 0;
                return (
                  r.add(
                    t.schedule(function() {
                      s !== e.length
                        ? (n.next(e[s++]), n.closed || r.add(this.schedule()))
                        : n.complete();
                    })
                  ),
                  r
                );
              }
            : I(e)
        );
      }
      function G(e, t) {
        if (!t) return e instanceof w ? e : new w(F(e));
        if (null != e) {
          if (
            (function(e) {
              return e && 'function' == typeof e[y];
            })(e)
          )
            return (function(e, t) {
              return new w(
                t
                  ? n => {
                      const r = new d();
                      return (
                        r.add(
                          t.schedule(() => {
                            const s = e[y]();
                            r.add(
                              s.subscribe({
                                next(e) {
                                  r.add(t.schedule(() => n.next(e)));
                                },
                                error(e) {
                                  r.add(t.schedule(() => n.error(e)));
                                },
                                complete() {
                                  r.add(t.schedule(() => n.complete()));
                                },
                              })
                            );
                          })
                        ),
                        r
                      );
                    }
                  : M(e)
              );
            })(e, t);
          if (U(e))
            return (function(e, t) {
              return new w(
                t
                  ? n => {
                      const r = new d();
                      return (
                        r.add(
                          t.schedule(() =>
                            e.then(
                              e => {
                                r.add(
                                  t.schedule(() => {
                                    n.next(e),
                                      r.add(t.schedule(() => n.complete()));
                                  })
                                );
                              },
                              e => {
                                r.add(t.schedule(() => n.error(e)));
                              }
                            )
                          )
                        ),
                        r
                      );
                    }
                  : R(e)
              );
            })(e, t);
          if (L(e)) return q(e, t);
          if (
            (function(e) {
              return e && 'function' == typeof e[D];
            })(e) ||
            'string' == typeof e
          )
            return (function(e, t) {
              if (!e) throw new Error('Iterable cannot be null');
              return new w(
                t
                  ? n => {
                      const r = new d();
                      let s;
                      return (
                        r.add(() => {
                          s && 'function' == typeof s.return && s.return();
                        }),
                        r.add(
                          t.schedule(() => {
                            (s = e[D]()),
                              r.add(
                                t.schedule(function() {
                                  if (n.closed) return;
                                  let e, t;
                                  try {
                                    const n = s.next();
                                    (e = n.value), (t = n.done);
                                  } catch (r) {
                                    return void n.error(r);
                                  }
                                  t
                                    ? n.complete()
                                    : (n.next(e), this.schedule());
                                })
                              );
                          })
                        ),
                        r
                      );
                    }
                  : V(e)
              );
            })(e, t);
        }
        throw new TypeError(
          ((null !== e && typeof e) || e) + ' is not observable'
        );
      }
      function W(e, t, n = Number.POSITIVE_INFINITY) {
        return 'function' == typeof t
          ? r =>
              r.pipe(
                W((n, r) => G(e(n, r)).pipe(H((e, s) => t(n, e, r, s))), n)
              )
          : ('number' == typeof t && (n = t), t => t.lift(new Z(e, n)));
      }
      class Z {
        constructor(e, t = Number.POSITIVE_INFINITY) {
          (this.project = e), (this.concurrent = t);
        }
        call(e, t) {
          return t.subscribe(new Q(e, this.project, this.concurrent));
        }
      }
      class Q extends $ {
        constructor(e, t, n = Number.POSITIVE_INFINITY) {
          super(e),
            (this.project = t),
            (this.concurrent = n),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(e) {
          this.active < this.concurrent
            ? this._tryNext(e)
            : this.buffer.push(e);
        }
        _tryNext(e) {
          let t;
          const n = this.index++;
          try {
            t = this.project(e, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this.active++, this._innerSub(t, e, n);
        }
        _innerSub(e, t, n) {
          const r = new O(this, void 0, void 0);
          this.destination.add(r), j(this, e, t, n, r);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active &&
              0 === this.buffer.length &&
              this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(e, t, n, r, s) {
          this.destination.next(t);
        }
        notifyComplete(e) {
          const t = this.buffer;
          this.remove(e),
            this.active--,
            t.length > 0
              ? this._next(t.shift())
              : 0 === this.active &&
                this.hasCompleted &&
                this.destination.complete();
        }
      }
      function K(e) {
        return e;
      }
      function J(e = Number.POSITIVE_INFINITY) {
        return W(K, e);
      }
      function Y() {
        return function(e) {
          return e.lift(new X(e));
        };
      }
      class X {
        constructor(e) {
          this.connectable = e;
        }
        call(e, t) {
          const { connectable: n } = this;
          n._refCount++;
          const r = new ee(e, n),
            s = t.subscribe(r);
          return r.closed || (r.connection = n.connect()), s;
        }
      }
      class ee extends f {
        constructor(e, t) {
          super(e), (this.connectable = t);
        }
        _unsubscribe() {
          const { connectable: e } = this;
          if (!e) return void (this.connection = null);
          this.connectable = null;
          const t = e._refCount;
          if (t <= 0) return void (this.connection = null);
          if (((e._refCount = t - 1), t > 1))
            return void (this.connection = null);
          const { connection: n } = this,
            r = e._connection;
          (this.connection = null), !r || (n && r !== n) || r.unsubscribe();
        }
      }
      const te = class extends w {
          constructor(e, t) {
            super(),
              (this.source = e),
              (this.subjectFactory = t),
              (this._refCount = 0),
              (this._isComplete = !1);
          }
          _subscribe(e) {
            return this.getSubject().subscribe(e);
          }
          getSubject() {
            const e = this._subject;
            return (
              (e && !e.isStopped) || (this._subject = this.subjectFactory()),
              this._subject
            );
          }
          connect() {
            let e = this._connection;
            return (
              e ||
                ((this._isComplete = !1),
                (e = this._connection = new d()).add(
                  this.source.subscribe(new re(this.getSubject(), this))
                ),
                e.closed
                  ? ((this._connection = null), (e = d.EMPTY))
                  : (this._connection = e)),
              e
            );
          }
          refCount() {
            return Y()(this);
          }
        }.prototype,
        ne = {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: te._subscribe },
          _isComplete: { value: te._isComplete, writable: !0 },
          getSubject: { value: te.getSubject },
          connect: { value: te.connect },
          refCount: { value: te.refCount },
        };
      class re extends E {
        constructor(e, t) {
          super(e), (this.connectable = t);
        }
        _error(e) {
          this._unsubscribe(), super._error(e);
        }
        _complete() {
          (this.connectable._isComplete = !0),
            this._unsubscribe(),
            super._complete();
        }
        _unsubscribe() {
          const e = this.connectable;
          if (e) {
            this.connectable = null;
            const t = e._connection;
            (e._refCount = 0),
              (e._subject = null),
              (e._connection = null),
              t && t.unsubscribe();
          }
        }
      }
      function se() {
        return new T();
      }
      const le = '__parameters__';
      function ie(e, t, n) {
        const r = (function(e) {
          return function(...t) {
            if (e) {
              const n = e(...t);
              for (const e in n) this[e] = n[e];
            }
          };
        })(t);
        function s(...e) {
          if (this instanceof s) return r.apply(this, e), this;
          const t = new s(...e);
          return (n.annotation = t), n;
          function n(e, n, r) {
            const s = e.hasOwnProperty(le)
              ? e[le]
              : Object.defineProperty(e, le, { value: [] })[le];
            for (; s.length <= r; ) s.push(null);
            return (s[r] = s[r] || []).push(t), e;
          }
        }
        return (
          n && (s.prototype = Object.create(n.prototype)),
          (s.prototype.ngMetadataName = e),
          (s.annotationCls = s),
          s
        );
      }
      const oe = ie('Inject', e => ({ token: e })),
        ae = ie('Optional'),
        ue = ie('Self'),
        ce = ie('SkipSelf');
      var he = (function(e) {
        return (
          (e[(e.Default = 0)] = 'Default'),
          (e[(e.Host = 1)] = 'Host'),
          (e[(e.Self = 2)] = 'Self'),
          (e[(e.SkipSelf = 4)] = 'SkipSelf'),
          (e[(e.Optional = 8)] = 'Optional'),
          e
        );
      })({});
      function de(e) {
        for (let t in e) if (e[t] === de) return t;
        throw Error('Could not find renamed property on target object.');
      }
      function pe(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function ge(e) {
        const t = e[fe];
        return t && t.token === e ? t : null;
      }
      const fe = de({ ngInjectableDef: de });
      function me(e) {
        if ('string' == typeof e) return e;
        if (e instanceof Array) return '[' + e.map(me).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return '' + t;
        const n = t.indexOf('\n');
        return -1 === n ? t : t.substring(0, n);
      }
      const ye = de({ __forward_ref__: de });
      function ve(e) {
        return (
          (e.__forward_ref__ = ve),
          (e.toString = function() {
            return me(this());
          }),
          e
        );
      }
      function be(e) {
        const t = e;
        return 'function' == typeof t &&
          t.hasOwnProperty(ye) &&
          t.__forward_ref__ === ve
          ? t()
          : e;
      }
      const _e = 'undefined' != typeof globalThis && globalThis,
        we = 'undefined' != typeof window && window,
        Ce =
          'undefined' != typeof self &&
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        xe = 'undefined' != typeof global && global,
        Se = _e || xe || we || Ce;
      class ke {
        constructor(e, t) {
          (this._desc = e),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ngInjectableDef = void 0),
            'number' == typeof t
              ? (this.__NG_ELEMENT_ID__ = t)
              : void 0 !== t &&
                (this.ngInjectableDef = pe({
                  token: this,
                  providedIn: t.providedIn || 'root',
                  factory: t.factory,
                }));
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      const Ee = new ke('INJECTOR', -1),
        Te = new Object(),
        Ae = 'ngTempTokenPath',
        Ne = 'ngTokenPath',
        Oe = /\n/gm,
        Ie = '\u0275',
        Re = '__source',
        Pe = de({ provide: String, useValue: de });
      let De,
        Ve = void 0;
      function Me(e) {
        const t = Ve;
        return (Ve = e), t;
      }
      function Le(e, t = he.Default) {
        if (void 0 === Ve)
          throw new Error('inject() must be called from an injection context');
        return null === Ve
          ? (function(e, t, n) {
              const r = ge(e);
              if (r && 'root' == r.providedIn)
                return void 0 === r.value ? (r.value = r.factory()) : r.value;
              if (n & he.Optional) return null;
              throw new Error(`Injector: NOT_FOUND [${me(e)}]`);
            })(e, 0, t)
          : Ve.get(e, t & he.Optional ? null : void 0, t);
      }
      function Ue(e, t = he.Default) {
        return (De || Le)(e, t);
      }
      class Fe {
        get(e, t = Te) {
          if (t === Te) {
            const t = new Error(`NullInjectorError: No provider for ${me(e)}!`);
            throw ((t.name = 'NullInjectorError'), t);
          }
          return t;
        }
      }
      function je(e, t, n, r = null) {
        e = e && '\n' === e.charAt(0) && e.charAt(1) == Ie ? e.substr(2) : e;
        let s = me(t);
        if (t instanceof Array) s = t.map(me).join(' -> ');
        else if ('object' == typeof t) {
          let e = [];
          for (let n in t)
            if (t.hasOwnProperty(n)) {
              let r = t[n];
              e.push(
                n + ':' + ('string' == typeof r ? JSON.stringify(r) : me(r))
              );
            }
          s = `{${e.join(', ')}}`;
        }
        return `${n}${r ? '(' + r + ')' : ''}[${s}]: ${e.replace(Oe, '\n  ')}`;
      }
      class $e {}
      class He {}
      function ze(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function Be(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      const qe = (function() {
          var e = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 };
          return (
            (e[e.Emulated] = 'Emulated'),
            (e[e.Native] = 'Native'),
            (e[e.None] = 'None'),
            (e[e.ShadowDom] = 'ShadowDom'),
            e
          );
        })(),
        Ge = (() =>
          (
            ('undefined' != typeof requestAnimationFrame &&
              requestAnimationFrame) ||
            setTimeout
          ).bind(Se))(),
        We = 'ngDebugContext',
        Ze = 'ngOriginalError',
        Qe = 'ngErrorLogger';
      function Ke(e) {
        return e[We];
      }
      function Je(e) {
        return e[Ze];
      }
      function Ye(e, ...t) {
        e.error(...t);
      }
      class Xe {
        constructor() {
          this._console = console;
        }
        handleError(e) {
          const t = this._findOriginalError(e),
            n = this._findContext(e),
            r = (function(e) {
              return e[Qe] || Ye;
            })(e);
          r(this._console, 'ERROR', e),
            t && r(this._console, 'ORIGINAL ERROR', t),
            n && r(this._console, 'ERROR CONTEXT', n);
        }
        _findContext(e) {
          return e ? (Ke(e) ? Ke(e) : this._findContext(Je(e))) : null;
        }
        _findOriginalError(e) {
          let t = Je(e);
          for (; t && Je(t); ) t = Je(t);
          return t;
        }
      }
      let et = !0,
        tt = !1;
      function nt() {
        return (tt = !0), et;
      }
      class rt {
        constructor(e) {
          if (
            ((this.defaultDoc = e),
            (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument(
              'sanitization-inert'
            )),
            (this.inertBodyElement = this.inertDocument.body),
            null == this.inertBodyElement)
          ) {
            const e = this.inertDocument.createElement('html');
            this.inertDocument.appendChild(e),
              (this.inertBodyElement = this.inertDocument.createElement(
                'body'
              )),
              e.appendChild(this.inertBodyElement);
          }
          (this.inertBodyElement.innerHTML =
            '<svg><g onload="this.parentNode.remove()"></g></svg>'),
            !this.inertBodyElement.querySelector ||
            this.inertBodyElement.querySelector('svg')
              ? ((this.inertBodyElement.innerHTML =
                  '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),
                (this.getInertBodyElement =
                  this.inertBodyElement.querySelector &&
                  this.inertBodyElement.querySelector('svg img') &&
                  (function() {
                    try {
                      return !!window.DOMParser;
                    } catch (e) {
                      return !1;
                    }
                  })()
                    ? this.getInertBodyElement_DOMParser
                    : this.getInertBodyElement_InertDocument))
              : (this.getInertBodyElement = this.getInertBodyElement_XHR);
        }
        getInertBodyElement_XHR(e) {
          e = '<body><remove></remove>' + e + '</body>';
          try {
            e = encodeURI(e);
          } catch (r) {
            return null;
          }
          const t = new XMLHttpRequest();
          (t.responseType = 'document'),
            t.open('GET', 'data:text/html;charset=utf-8,' + e, !1),
            t.send(void 0);
          const n = t.response.body;
          return n.removeChild(n.firstChild), n;
        }
        getInertBodyElement_DOMParser(e) {
          e = '<body><remove></remove>' + e + '</body>';
          try {
            const t = new window.DOMParser().parseFromString(e, 'text/html')
              .body;
            return t.removeChild(t.firstChild), t;
          } catch (t) {
            return null;
          }
        }
        getInertBodyElement_InertDocument(e) {
          const t = this.inertDocument.createElement('template');
          return 'content' in t
            ? ((t.innerHTML = e), t)
            : ((this.inertBodyElement.innerHTML = e),
              this.defaultDoc.documentMode &&
                this.stripCustomNsAttrs(this.inertBodyElement),
              this.inertBodyElement);
        }
        stripCustomNsAttrs(e) {
          const t = e.attributes;
          for (let r = t.length - 1; 0 < r; r--) {
            const n = t.item(r).name;
            ('xmlns:ns1' !== n && 0 !== n.indexOf('ns1:')) ||
              e.removeAttribute(n);
          }
          let n = e.firstChild;
          for (; n; )
            n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n),
              (n = n.nextSibling);
        }
      }
      const st = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        lt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function it(e) {
        return (e = String(e)).match(st) || e.match(lt)
          ? e
          : (nt() &&
              console.warn(
                `WARNING: sanitizing unsafe URL value ${e} (see http://g.co/ng/security#xss)`
              ),
            'unsafe:' + e);
      }
      function ot(e) {
        const t = {};
        for (const n of e.split(',')) t[n] = !0;
        return t;
      }
      function at(...e) {
        const t = {};
        for (const n of e)
          for (const e in n) n.hasOwnProperty(e) && (t[e] = !0);
        return t;
      }
      const ut = ot('area,br,col,hr,img,wbr'),
        ct = ot('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        ht = ot('rp,rt'),
        dt = at(ht, ct),
        pt = at(
          ut,
          at(
            ct,
            ot(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
            )
          ),
          at(
            ht,
            ot(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
            )
          ),
          dt
        ),
        gt = ot('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        ft = ot('srcset'),
        mt = at(
          gt,
          ft,
          ot(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
          ),
          ot(
            'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
          )
        ),
        yt = ot('script,style,template');
      class vt {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(e) {
          let t = e.firstChild,
            n = !0;
          for (; t; )
            if (
              (t.nodeType === Node.ELEMENT_NODE
                ? (n = this.startElement(t))
                : t.nodeType === Node.TEXT_NODE
                ? this.chars(t.nodeValue)
                : (this.sanitizedSomething = !0),
              n && t.firstChild)
            )
              t = t.firstChild;
            else
              for (; t; ) {
                t.nodeType === Node.ELEMENT_NODE && this.endElement(t);
                let e = this.checkClobberedElement(t, t.nextSibling);
                if (e) {
                  t = e;
                  break;
                }
                t = this.checkClobberedElement(t, t.parentNode);
              }
          return this.buf.join('');
        }
        startElement(e) {
          const t = e.nodeName.toLowerCase();
          if (!pt.hasOwnProperty(t))
            return (this.sanitizedSomething = !0), !yt.hasOwnProperty(t);
          this.buf.push('<'), this.buf.push(t);
          const n = e.attributes;
          for (let s = 0; s < n.length; s++) {
            const e = n.item(s),
              t = e.name,
              l = t.toLowerCase();
            if (!mt.hasOwnProperty(l)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let i = e.value;
            gt[l] && (i = it(i)),
              ft[l] &&
                ((r = i),
                (i = (r = String(r))
                  .split(',')
                  .map(e => it(e.trim()))
                  .join(', '))),
              this.buf.push(' ', t, '="', wt(i), '"');
          }
          var r;
          return this.buf.push('>'), !0;
        }
        endElement(e) {
          const t = e.nodeName.toLowerCase();
          pt.hasOwnProperty(t) &&
            !ut.hasOwnProperty(t) &&
            (this.buf.push('</'), this.buf.push(t), this.buf.push('>'));
        }
        chars(e) {
          this.buf.push(wt(e));
        }
        checkClobberedElement(e, t) {
          if (
            t &&
            (e.compareDocumentPosition(t) &
              Node.DOCUMENT_POSITION_CONTAINED_BY) ===
              Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(
              `Failed to sanitize html because the element is clobbered: ${e.outerHTML}`
            );
          return t;
        }
      }
      const bt = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        _t = /([^\#-~ |!])/g;
      function wt(e) {
        return e
          .replace(/&/g, '&amp;')
          .replace(bt, function(e) {
            return (
              '&#' +
              (1024 * (e.charCodeAt(0) - 55296) +
                (e.charCodeAt(1) - 56320) +
                65536) +
              ';'
            );
          })
          .replace(_t, function(e) {
            return '&#' + e.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      let Ct;
      function xt(e) {
        return 'content' in e &&
          (function(e) {
            return (
              e.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === e.nodeName
            );
          })(e)
          ? e.content
          : null;
      }
      const St = (function() {
        var e = {
          NONE: 0,
          HTML: 1,
          STYLE: 2,
          SCRIPT: 3,
          URL: 4,
          RESOURCE_URL: 5,
        };
        return (
          (e[e.NONE] = 'NONE'),
          (e[e.HTML] = 'HTML'),
          (e[e.STYLE] = 'STYLE'),
          (e[e.SCRIPT] = 'SCRIPT'),
          (e[e.URL] = 'URL'),
          (e[e.RESOURCE_URL] = 'RESOURCE_URL'),
          e
        );
      })();
      class kt {}
      const Et = new RegExp(
          '^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
          'g'
        ),
        Tt = /^url\(([^)]+)\)$/,
        At = /([A-Z])/g;
      function Nt(e) {
        try {
          return null != e ? e.toString().slice(0, 30) : e;
        } catch (t) {
          return '[ERROR] Exception while trying to serialize the value';
        }
      }
      let Ot = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => It()), e;
      })();
      const It = (...e) => {},
        Rt = new ke(
          'The presence of this token marks an injector as being the root injector.'
        ),
        Pt = function(e, t, n) {
          return new jt(e, t, n);
        };
      let Dt = (() => {
        class e {
          static create(e, t) {
            return Array.isArray(e)
              ? Pt(e, t, '')
              : Pt(e.providers, e.parent, e.name || '');
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = Te),
          (e.NULL = new Fe()),
          (e.ngInjectableDef = pe({
            token: e,
            providedIn: 'any',
            factory: () => Ue(Ee),
          })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      const Vt = function(e) {
          return e;
        },
        Mt = [],
        Lt = Vt,
        Ut = function() {
          return Array.prototype.slice.call(arguments);
        },
        Ft = '\u0275';
      class jt {
        constructor(e, t = Dt.NULL, n = null) {
          (this.parent = t), (this.source = n);
          const r = (this._records = new Map());
          r.set(Dt, { token: Dt, fn: Vt, deps: Mt, value: this, useNew: !1 }),
            r.set(Ee, { token: Ee, fn: Vt, deps: Mt, value: this, useNew: !1 }),
            (function e(t, n) {
              if (n)
                if ((n = be(n)) instanceof Array)
                  for (let r = 0; r < n.length; r++) e(t, n[r]);
                else {
                  if ('function' == typeof n)
                    throw Ht('Function/Class not supported', n);
                  if (!n || 'object' != typeof n || !n.provide)
                    throw Ht('Unexpected provider', n);
                  {
                    let e = be(n.provide);
                    const r = (function(e) {
                      const t = (function(e) {
                        let t = Mt;
                        const n = e.deps;
                        if (n && n.length) {
                          t = [];
                          for (let e = 0; e < n.length; e++) {
                            let r = 6,
                              s = be(n[e]);
                            if (s instanceof Array)
                              for (let e = 0, t = s; e < t.length; e++) {
                                const n = t[e];
                                n instanceof ae || n == ae
                                  ? (r |= 1)
                                  : n instanceof ce || n == ce
                                  ? (r &= -3)
                                  : n instanceof ue || n == ue
                                  ? (r &= -5)
                                  : (s = n instanceof oe ? n.token : be(n));
                              }
                            t.push({ token: s, options: r });
                          }
                        } else if (e.useExisting)
                          t = [{ token: be(e.useExisting), options: 6 }];
                        else if (!(n || Pe in e))
                          throw Ht("'deps' required", e);
                        return t;
                      })(e);
                      let n = Vt,
                        r = Mt,
                        s = !1,
                        l = be(e.provide);
                      if (Pe in e) r = e.useValue;
                      else if (e.useFactory) n = e.useFactory;
                      else if (e.useExisting);
                      else if (e.useClass) (s = !0), (n = be(e.useClass));
                      else {
                        if ('function' != typeof l)
                          throw Ht(
                            'StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable',
                            e
                          );
                        (s = !0), (n = l);
                      }
                      return { deps: t, fn: n, useNew: s, value: r };
                    })(n);
                    if (!0 === n.multi) {
                      let r = t.get(e);
                      if (r) {
                        if (r.fn !== Ut) throw $t(e);
                      } else
                        t.set(
                          e,
                          (r = {
                            token: n.provide,
                            deps: [],
                            useNew: !1,
                            fn: Ut,
                            value: Mt,
                          })
                        );
                      r.deps.push({ token: (e = n), options: 6 });
                    }
                    const s = t.get(e);
                    if (s && s.fn == Ut) throw $t(e);
                    t.set(e, r);
                  }
                }
            })(r, e);
        }
        get(e, t, n = he.Default) {
          const r = this._records.get(e);
          try {
            return (function e(t, n, r, s, l, i) {
              try {
                return (function(t, n, r, s, l, i) {
                  let o;
                  if (!n || i & he.SkipSelf)
                    i & he.Self || (o = s.get(t, l, he.Default));
                  else {
                    if ((o = n.value) == Lt)
                      throw Error(Ft + 'Circular dependency');
                    if (o === Mt) {
                      n.value = Lt;
                      let t = void 0,
                        l = n.useNew,
                        i = n.fn,
                        a = n.deps,
                        u = Mt;
                      if (a.length) {
                        u = [];
                        for (let t = 0; t < a.length; t++) {
                          const n = a[t],
                            l = n.options,
                            i = 2 & l ? r.get(n.token) : void 0;
                          u.push(
                            e(
                              n.token,
                              i,
                              r,
                              i || 4 & l ? s : Dt.NULL,
                              1 & l ? null : Dt.THROW_IF_NOT_FOUND,
                              he.Default
                            )
                          );
                        }
                      }
                      n.value = o = l ? new i(...u) : i.apply(t, u);
                    }
                  }
                  return o;
                })(t, n, r, s, l, i);
              } catch (o) {
                throw (o instanceof Error || (o = new Error(o)),
                (o[Ae] = o[Ae] || []).unshift(t),
                n && n.value == Lt && (n.value = Mt),
                o);
              }
            })(e, r, this._records, this.parent, t, n);
          } catch (s) {
            return (function(e, t, n, r) {
              const s = e[Ae];
              throw (t[Re] && s.unshift(t[Re]),
              (e.message = je('\n' + e.message, s, 'StaticInjectorError', r)),
              (e[Ne] = s),
              (e[Ae] = null),
              e);
            })(s, e, 0, this.source);
          }
        }
        toString() {
          const e = [];
          return (
            this._records.forEach((t, n) => e.push(me(n))),
            `StaticInjector[${e.join(', ')}]`
          );
        }
      }
      function $t(e) {
        return Ht('Cannot mix multi providers and regular providers', e);
      }
      function Ht(e, t) {
        return new Error(je(e, t, 'StaticInjectorError'));
      }
      const zt = new ke('AnalyzeForEntryComponents');
      let Bt = null;
      function qt() {
        if (!Bt) {
          const e = Se.Symbol;
          if (e && e.iterator) Bt = e.iterator;
          else {
            const e = Object.getOwnPropertyNames(Map.prototype);
            for (let t = 0; t < e.length; ++t) {
              const n = e[t];
              'entries' !== n &&
                'size' !== n &&
                Map.prototype[n] === Map.prototype.entries &&
                (Bt = n);
            }
          }
        }
        return Bt;
      }
      function Gt(e, t) {
        return (
          e === t ||
          ('number' == typeof e && 'number' == typeof t && isNaN(e) && isNaN(t))
        );
      }
      function Wt(e, t) {
        const n = Qt(e),
          r = Qt(t);
        if (n && r)
          return (function(e, t, n) {
            const r = e[qt()](),
              s = t[qt()]();
            for (;;) {
              const e = r.next(),
                t = s.next();
              if (e.done && t.done) return !0;
              if (e.done || t.done) return !1;
              if (!n(e.value, t.value)) return !1;
            }
          })(e, t, Wt);
        {
          const s = e && ('object' == typeof e || 'function' == typeof e),
            l = t && ('object' == typeof t || 'function' == typeof t);
          return !(n || !s || r || !l) || Gt(e, t);
        }
      }
      class Zt {
        constructor(e) {
          this.wrapped = e;
        }
        static wrap(e) {
          return new Zt(e);
        }
        static unwrap(e) {
          return Zt.isWrapped(e) ? e.wrapped : e;
        }
        static isWrapped(e) {
          return e instanceof Zt;
        }
      }
      function Qt(e) {
        return (
          !!Kt(e) && (Array.isArray(e) || (!(e instanceof Map) && qt() in e))
        );
      }
      function Kt(e) {
        return null !== e && ('function' == typeof e || 'object' == typeof e);
      }
      function Jt(e) {
        return !!e && 'function' == typeof e.then;
      }
      function Yt(e) {
        return !!e && 'function' == typeof e.subscribe;
      }
      class Xt {
        constructor(e, t, n) {
          (this.previousValue = e),
            (this.currentValue = t),
            (this.firstChange = n);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      class en {}
      class tn {}
      function nn(e) {
        const t = Error(
          `No component factory found for ${me(
            e
          )}. Did you add it to @NgModule.entryComponents?`
        );
        return (t[rn] = e), t;
      }
      const rn = 'ngComponent';
      class sn {
        resolveComponentFactory(e) {
          throw nn(e);
        }
      }
      let ln = (() => {
        class e {}
        return (e.NULL = new sn()), e;
      })();
      class on {
        constructor(e, t, n) {
          (this._parent = t),
            (this._ngModule = n),
            (this._factories = new Map());
          for (let r = 0; r < e.length; r++) {
            const t = e[r];
            this._factories.set(t.componentType, t);
          }
        }
        resolveComponentFactory(e) {
          let t = this._factories.get(e);
          if (
            (!t &&
              this._parent &&
              (t = this._parent.resolveComponentFactory(e)),
            !t)
          )
            throw nn(e);
          return new an(t, this._ngModule);
        }
      }
      class an extends tn {
        constructor(e, t) {
          super(),
            (this.factory = e),
            (this.ngModule = t),
            (this.selector = e.selector),
            (this.componentType = e.componentType),
            (this.ngContentSelectors = e.ngContentSelectors),
            (this.inputs = e.inputs),
            (this.outputs = e.outputs);
        }
        create(e, t, n, r) {
          return this.factory.create(e, t, n, r || this.ngModule);
        }
      }
      function un(...e) {}
      let cn = (() => {
        class e {
          constructor(e) {
            this.nativeElement = e;
          }
        }
        return (e.__NG_ELEMENT_ID__ = () => hn(e)), e;
      })();
      const hn = un;
      class dn {}
      class pn {}
      const gn = (function() {
        var e = { Important: 1, DashCase: 2 };
        return (e[e.Important] = 'Important'), (e[e.DashCase] = 'DashCase'), e;
      })();
      let fn = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => mn()), e;
      })();
      const mn = un;
      class yn {
        constructor(e) {
          (this.full = e),
            (this.major = e.split('.')[0]),
            (this.minor = e.split('.')[1]),
            (this.patch = e
              .split('.')
              .slice(2)
              .join('.'));
        }
      }
      const vn = new yn('8.2.14');
      class bn {
        constructor() {}
        supports(e) {
          return Qt(e);
        }
        create(e) {
          return new wn(e);
        }
      }
      const _n = (e, t) => t;
      class wn {
        constructor(e) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = e || _n);
        }
        forEachItem(e) {
          let t;
          for (t = this._itHead; null !== t; t = t._next) e(t);
        }
        forEachOperation(e) {
          let t = this._itHead,
            n = this._removalsHead,
            r = 0,
            s = null;
          for (; t || n; ) {
            const l = !n || (t && t.currentIndex < kn(n, r, s)) ? t : n,
              i = kn(l, r, s),
              o = l.currentIndex;
            if (l === n) r--, (n = n._nextRemoved);
            else if (((t = t._next), null == l.previousIndex)) r++;
            else {
              s || (s = []);
              const e = i - r,
                t = o - r;
              if (e != t) {
                for (let n = 0; n < e; n++) {
                  const r = n < s.length ? s[n] : (s[n] = 0),
                    l = r + n;
                  t <= l && l < e && (s[n] = r + 1);
                }
                s[l.previousIndex] = t - e;
              }
            }
            i !== o && e(l, i, o);
          }
        }
        forEachPreviousItem(e) {
          let t;
          for (t = this._previousItHead; null !== t; t = t._nextPrevious) e(t);
        }
        forEachAddedItem(e) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
        }
        forEachMovedItem(e) {
          let t;
          for (t = this._movesHead; null !== t; t = t._nextMoved) e(t);
        }
        forEachRemovedItem(e) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
        }
        forEachIdentityChange(e) {
          let t;
          for (
            t = this._identityChangesHead;
            null !== t;
            t = t._nextIdentityChange
          )
            e(t);
        }
        diff(e) {
          if ((null == e && (e = []), !Qt(e)))
            throw new Error(
              `Error trying to diff '${me(
                e
              )}'. Only arrays and iterables are allowed`
            );
          return this.check(e) ? this : null;
        }
        onDestroy() {}
        check(e) {
          this._reset();
          let t,
            n,
            r,
            s = this._itHead,
            l = !1;
          if (Array.isArray(e)) {
            this.length = e.length;
            for (let t = 0; t < this.length; t++)
              (r = this._trackByFn(t, (n = e[t]))),
                null !== s && Gt(s.trackById, r)
                  ? (l && (s = this._verifyReinsertion(s, n, r, t)),
                    Gt(s.item, n) || this._addIdentityChange(s, n))
                  : ((s = this._mismatch(s, n, r, t)), (l = !0)),
                (s = s._next);
          } else
            (t = 0),
              (function(e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[qt()]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(e, e => {
                (r = this._trackByFn(t, e)),
                  null !== s && Gt(s.trackById, r)
                    ? (l && (s = this._verifyReinsertion(s, e, r, t)),
                      Gt(s.item, e) || this._addIdentityChange(s, e))
                    : ((s = this._mismatch(s, e, r, t)), (l = !0)),
                  (s = s._next),
                  t++;
              }),
              (this.length = t);
          return this._truncate(s), (this.collection = e), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let e, t;
            for (
              e = this._previousItHead = this._itHead;
              null !== e;
              e = e._next
            )
              e._nextPrevious = e._next;
            for (e = this._additionsHead; null !== e; e = e._nextAdded)
              e.previousIndex = e.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                e = this._movesHead;
              null !== e;
              e = t
            )
              (e.previousIndex = e.currentIndex), (t = e._nextMoved);
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(e, t, n, r) {
          let s;
          return (
            null === e ? (s = this._itTail) : ((s = e._prev), this._remove(e)),
            null !==
            (e =
              null === this._linkedRecords
                ? null
                : this._linkedRecords.get(n, r))
              ? (Gt(e.item, t) || this._addIdentityChange(e, t),
                this._moveAfter(e, s, r))
              : null !==
                (e =
                  null === this._unlinkedRecords
                    ? null
                    : this._unlinkedRecords.get(n, null))
              ? (Gt(e.item, t) || this._addIdentityChange(e, t),
                this._reinsertAfter(e, s, r))
              : (e = this._addAfter(new Cn(t, n), s, r)),
            e
          );
        }
        _verifyReinsertion(e, t, n, r) {
          let s =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(n, null);
          return (
            null !== s
              ? (e = this._reinsertAfter(s, e._prev, r))
              : e.currentIndex != r &&
                ((e.currentIndex = r), this._addToMoves(e, r)),
            e
          );
        }
        _truncate(e) {
          for (; null !== e; ) {
            const t = e._next;
            this._addToRemovals(this._unlink(e)), (e = t);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(e, t, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
          const r = e._prevRemoved,
            s = e._nextRemoved;
          return (
            null === r ? (this._removalsHead = s) : (r._nextRemoved = s),
            null === s ? (this._removalsTail = r) : (s._prevRemoved = r),
            this._insertAfter(e, t, n),
            this._addToMoves(e, n),
            e
          );
        }
        _moveAfter(e, t, n) {
          return (
            this._unlink(e),
            this._insertAfter(e, t, n),
            this._addToMoves(e, n),
            e
          );
        }
        _addAfter(e, t, n) {
          return (
            this._insertAfter(e, t, n),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = e)
                : (this._additionsTail._nextAdded = e)),
            e
          );
        }
        _insertAfter(e, t, n) {
          const r = null === t ? this._itHead : t._next;
          return (
            (e._next = r),
            (e._prev = t),
            null === r ? (this._itTail = e) : (r._prev = e),
            null === t ? (this._itHead = e) : (t._next = e),
            null === this._linkedRecords && (this._linkedRecords = new Sn()),
            this._linkedRecords.put(e),
            (e.currentIndex = n),
            e
          );
        }
        _remove(e) {
          return this._addToRemovals(this._unlink(e));
        }
        _unlink(e) {
          null !== this._linkedRecords && this._linkedRecords.remove(e);
          const t = e._prev,
            n = e._next;
          return (
            null === t ? (this._itHead = n) : (t._next = n),
            null === n ? (this._itTail = t) : (n._prev = t),
            e
          );
        }
        _addToMoves(e, t) {
          return e.previousIndex === t
            ? e
            : ((this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = e)
                  : (this._movesTail._nextMoved = e)),
              e);
        }
        _addToRemovals(e) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new Sn()),
            this._unlinkedRecords.put(e),
            (e.currentIndex = null),
            (e._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = e),
                (e._prevRemoved = null))
              : ((e._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = e)),
            e
          );
        }
        _addIdentityChange(e, t) {
          return (
            (e.item = t),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = e)
                : (this._identityChangesTail._nextIdentityChange = e)),
            e
          );
        }
      }
      class Cn {
        constructor(e, t) {
          (this.item = e),
            (this.trackById = t),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class xn {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(e) {
          null === this._head
            ? ((this._head = this._tail = e),
              (e._nextDup = null),
              (e._prevDup = null))
            : ((this._tail._nextDup = e),
              (e._prevDup = this._tail),
              (e._nextDup = null),
              (this._tail = e));
        }
        get(e, t) {
          let n;
          for (n = this._head; null !== n; n = n._nextDup)
            if ((null === t || t <= n.currentIndex) && Gt(n.trackById, e))
              return n;
          return null;
        }
        remove(e) {
          const t = e._prevDup,
            n = e._nextDup;
          return (
            null === t ? (this._head = n) : (t._nextDup = n),
            null === n ? (this._tail = t) : (n._prevDup = t),
            null === this._head
          );
        }
      }
      class Sn {
        constructor() {
          this.map = new Map();
        }
        put(e) {
          const t = e.trackById;
          let n = this.map.get(t);
          n || ((n = new xn()), this.map.set(t, n)), n.add(e);
        }
        get(e, t) {
          const n = this.map.get(e);
          return n ? n.get(e, t) : null;
        }
        remove(e) {
          const t = e.trackById;
          return this.map.get(t).remove(e) && this.map.delete(t), e;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function kn(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let s = 0;
        return n && r < n.length && (s = n[r]), r + t + s;
      }
      class En {
        constructor() {}
        supports(e) {
          return e instanceof Map || Kt(e);
        }
        create() {
          return new Tn();
        }
      }
      class Tn {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(e) {
          let t;
          for (t = this._mapHead; null !== t; t = t._next) e(t);
        }
        forEachPreviousItem(e) {
          let t;
          for (t = this._previousMapHead; null !== t; t = t._nextPrevious) e(t);
        }
        forEachChangedItem(e) {
          let t;
          for (t = this._changesHead; null !== t; t = t._nextChanged) e(t);
        }
        forEachAddedItem(e) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
        }
        forEachRemovedItem(e) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
        }
        diff(e) {
          if (e) {
            if (!(e instanceof Map || Kt(e)))
              throw new Error(
                `Error trying to diff '${me(
                  e
                )}'. Only maps and objects are allowed`
              );
          } else e = new Map();
          return this.check(e) ? this : null;
        }
        onDestroy() {}
        check(e) {
          this._reset();
          let t = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(e, (e, n) => {
              if (t && t.key === n)
                this._maybeAddToChanges(t, e),
                  (this._appendAfter = t),
                  (t = t._next);
              else {
                const r = this._getOrCreateRecordForKey(n, e);
                t = this._insertBeforeOrAppend(t, r);
              }
            }),
            t)
          ) {
            t._prev && (t._prev._next = null), (this._removalsHead = t);
            for (let e = t; null !== e; e = e._nextRemoved)
              e === this._mapHead && (this._mapHead = null),
                this._records.delete(e.key),
                (e._nextRemoved = e._next),
                (e.previousValue = e.currentValue),
                (e.currentValue = null),
                (e._prev = null),
                (e._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(e, t) {
          if (e) {
            const n = e._prev;
            return (
              (t._next = e),
              (t._prev = n),
              (e._prev = t),
              n && (n._next = t),
              e === this._mapHead && (this._mapHead = t),
              (this._appendAfter = e),
              e
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = t), (t._prev = this._appendAfter))
              : (this._mapHead = t),
            (this._appendAfter = t),
            null
          );
        }
        _getOrCreateRecordForKey(e, t) {
          if (this._records.has(e)) {
            const n = this._records.get(e);
            this._maybeAddToChanges(n, t);
            const r = n._prev,
              s = n._next;
            return (
              r && (r._next = s),
              s && (s._prev = r),
              (n._next = null),
              (n._prev = null),
              n
            );
          }
          const n = new An(e);
          return (
            this._records.set(e, n),
            (n.currentValue = t),
            this._addToAdditions(n),
            n
          );
        }
        _reset() {
          if (this.isDirty) {
            let e;
            for (
              this._previousMapHead = this._mapHead, e = this._previousMapHead;
              null !== e;
              e = e._next
            )
              e._nextPrevious = e._next;
            for (e = this._changesHead; null !== e; e = e._nextChanged)
              e.previousValue = e.currentValue;
            for (e = this._additionsHead; null != e; e = e._nextAdded)
              e.previousValue = e.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(e, t) {
          Gt(t, e.currentValue) ||
            ((e.previousValue = e.currentValue),
            (e.currentValue = t),
            this._addToChanges(e));
        }
        _addToAdditions(e) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = e)
            : ((this._additionsTail._nextAdded = e), (this._additionsTail = e));
        }
        _addToChanges(e) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = e)
            : ((this._changesTail._nextChanged = e), (this._changesTail = e));
        }
        _forEach(e, t) {
          e instanceof Map
            ? e.forEach(t)
            : Object.keys(e).forEach(n => t(e[n], n));
        }
      }
      class An {
        constructor(e) {
          (this.key = e),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      let Nn = (() => {
          class e {
            constructor(e) {
              this.factories = e;
            }
            static create(t, n) {
              if (null != n) {
                const e = n.factories.slice();
                t = t.concat(e);
              }
              return new e(t);
            }
            static extend(t) {
              return {
                provide: e,
                useFactory: n => {
                  if (!n)
                    throw new Error(
                      'Cannot extend IterableDiffers without a parent injector'
                    );
                  return e.create(t, n);
                },
                deps: [[e, new ce(), new ae()]],
              };
            }
            find(e) {
              const t = this.factories.find(t => t.supports(e));
              if (null != t) return t;
              throw new Error(
                `Cannot find a differ supporting object '${e}' of type '${((n = e),
                n.name || typeof n)}'`
              );
              var n;
            }
          }
          return (
            (e.ngInjectableDef = pe({
              token: e,
              providedIn: 'root',
              factory: () => new e([new bn()]),
            })),
            e
          );
        })(),
        On = (() => {
          class e {
            constructor(e) {
              this.factories = e;
            }
            static create(t, n) {
              if (n) {
                const e = n.factories.slice();
                t = t.concat(e);
              }
              return new e(t);
            }
            static extend(t) {
              return {
                provide: e,
                useFactory: n => {
                  if (!n)
                    throw new Error(
                      'Cannot extend KeyValueDiffers without a parent injector'
                    );
                  return e.create(t, n);
                },
                deps: [[e, new ce(), new ae()]],
              };
            }
            find(e) {
              const t = this.factories.find(t => t.supports(e));
              if (t) return t;
              throw new Error(`Cannot find a differ supporting object '${e}'`);
            }
          }
          return (
            (e.ngInjectableDef = pe({
              token: e,
              providedIn: 'root',
              factory: () => new e([new En()]),
            })),
            e
          );
        })();
      const In = [new En()],
        Rn = new Nn([new bn()]),
        Pn = new On(In);
      let Dn = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => Vn(e, cn)), e;
      })();
      const Vn = un;
      let Mn = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => Ln(e, cn)), e;
      })();
      const Ln = un;
      function Un(e, t, n, r) {
        let s = `ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '${t}'. Current value: '${n}'.`;
        return (
          r &&
            (s +=
              ' It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?'),
          (function(e, t) {
            const n = new Error(e);
            return Fn(n, t), n;
          })(s, e)
        );
      }
      function Fn(e, t) {
        (e[We] = t), (e[Qe] = t.logError.bind(t));
      }
      function jn(e) {
        return new Error(
          `ViewDestroyedError: Attempt to use a destroyed view: ${e}`
        );
      }
      function $n(e, t, n) {
        const r = e.state,
          s = 1792 & r;
        return s === t
          ? ((e.state = (-1793 & r) | n), (e.initIndex = -1), !0)
          : s === n;
      }
      function Hn(e, t, n) {
        return (
          (1792 & e.state) === t &&
          e.initIndex <= n &&
          ((e.initIndex = n + 1), !0)
        );
      }
      function zn(e, t) {
        return e.nodes[t];
      }
      function Bn(e, t) {
        return e.nodes[t];
      }
      function qn(e, t) {
        return e.nodes[t];
      }
      function Gn(e, t) {
        return e.nodes[t];
      }
      function Wn(e, t) {
        return e.nodes[t];
      }
      const Zn = {
          setCurrentNode: void 0,
          createRootView: void 0,
          createEmbeddedView: void 0,
          createComponentView: void 0,
          createNgModuleRef: void 0,
          overrideProvider: void 0,
          overrideComponentView: void 0,
          clearOverrides: void 0,
          checkAndUpdateView: void 0,
          checkNoChangesView: void 0,
          destroyView: void 0,
          resolveDep: void 0,
          createDebugContext: void 0,
          handleEvent: void 0,
          updateDirectives: void 0,
          updateRenderer: void 0,
          dirtyParentQueries: void 0,
        },
        Qn = () => {},
        Kn = new Map();
      function Jn(e) {
        let t = Kn.get(e);
        return t || ((t = me(e) + '_' + Kn.size), Kn.set(e, t)), t;
      }
      function Yn(e, t, n, r) {
        if (Zt.isWrapped(r)) {
          r = Zt.unwrap(r);
          const s = e.def.nodes[t].bindingIndex + n,
            l = Zt.unwrap(e.oldValues[s]);
          e.oldValues[s] = new Zt(l);
        }
        return r;
      }
      const Xn = '$$undefined',
        er = '$$empty';
      function tr(e) {
        return {
          id: Xn,
          styles: e.styles,
          encapsulation: e.encapsulation,
          data: e.data,
        };
      }
      let nr = 0;
      function rr(e, t, n, r) {
        return !(!(2 & e.state) && Gt(e.oldValues[t.bindingIndex + n], r));
      }
      function sr(e, t, n, r) {
        return !!rr(e, t, n, r) && ((e.oldValues[t.bindingIndex + n] = r), !0);
      }
      function lr(e, t, n, r) {
        const s = e.oldValues[t.bindingIndex + n];
        if (1 & e.state || !Wt(s, r)) {
          const l = t.bindings[n].name;
          throw Un(
            Zn.createDebugContext(e, t.nodeIndex),
            `${l}: ${s}`,
            `${l}: ${r}`,
            0 != (1 & e.state)
          );
        }
      }
      function ir(e) {
        let t = e;
        for (; t; )
          2 & t.def.flags && (t.state |= 8),
            (t = t.viewContainerParent || t.parent);
      }
      function or(e, t) {
        let n = e;
        for (; n && n !== t; )
          (n.state |= 64), (n = n.viewContainerParent || n.parent);
      }
      function ar(e, t, n, r) {
        try {
          return (
            ir(33554432 & e.def.nodes[t].flags ? Bn(e, t).componentView : e),
            Zn.handleEvent(e, t, n, r)
          );
        } catch (s) {
          e.root.errorHandler.handleError(s);
        }
      }
      function ur(e) {
        return e.parent ? Bn(e.parent, e.parentNodeDef.nodeIndex) : null;
      }
      function cr(e) {
        return e.parent ? e.parentNodeDef.parent : null;
      }
      function hr(e, t) {
        switch (201347067 & t.flags) {
          case 1:
            return Bn(e, t.nodeIndex).renderElement;
          case 2:
            return zn(e, t.nodeIndex).renderText;
        }
      }
      function dr(e) {
        return !!e.parent && !!(32768 & e.parentNodeDef.flags);
      }
      function pr(e) {
        return !(!e.parent || 32768 & e.parentNodeDef.flags);
      }
      function gr(e) {
        return 1 << e % 32;
      }
      function fr(e) {
        const t = {};
        let n = 0;
        const r = {};
        return (
          e &&
            e.forEach(([e, s]) => {
              'number' == typeof e ? ((t[e] = s), (n |= gr(e))) : (r[e] = s);
            }),
          { matchedQueries: t, references: r, matchedQueryIds: n }
        );
      }
      function mr(e, t) {
        return e.map(e => {
          let n, r;
          return (
            Array.isArray(e) ? ([r, n] = e) : ((r = 0), (n = e)),
            n &&
              ('function' == typeof n || 'object' == typeof n) &&
              t &&
              Object.defineProperty(n, Re, { value: t, configurable: !0 }),
            { flags: r, token: n, tokenKey: Jn(n) }
          );
        });
      }
      function yr(e, t, n) {
        let r = n.renderParent;
        return r
          ? 0 == (1 & r.flags) ||
            0 == (33554432 & r.flags) ||
            (r.element.componentRendererType &&
              r.element.componentRendererType.encapsulation === qe.Native)
            ? Bn(e, n.renderParent.nodeIndex).renderElement
            : void 0
          : t;
      }
      const vr = new WeakMap();
      function br(e) {
        let t = vr.get(e);
        return t || (((t = e(() => Qn)).factory = e), vr.set(e, t)), t;
      }
      function _r(e, t, n, r, s) {
        3 === t && (n = e.renderer.parentNode(hr(e, e.def.lastRenderRootNode))),
          wr(e, t, 0, e.def.nodes.length - 1, n, r, s);
      }
      function wr(e, t, n, r, s, l, i) {
        for (let o = n; o <= r; o++) {
          const n = e.def.nodes[o];
          11 & n.flags && xr(e, n, t, s, l, i), (o += n.childCount);
        }
      }
      function Cr(e, t, n, r, s, l) {
        let i = e;
        for (; i && !dr(i); ) i = i.parent;
        const o = i.parent,
          a = cr(i),
          u = a.nodeIndex + a.childCount;
        for (let c = a.nodeIndex + 1; c <= u; c++) {
          const e = o.def.nodes[c];
          e.ngContentIndex === t && xr(o, e, n, r, s, l), (c += e.childCount);
        }
        if (!o.parent) {
          const i = e.root.projectableNodes[t];
          if (i) for (let t = 0; t < i.length; t++) Sr(e, i[t], n, r, s, l);
        }
      }
      function xr(e, t, n, r, s, l) {
        if (8 & t.flags) Cr(e, t.ngContent.index, n, r, s, l);
        else {
          const i = hr(e, t);
          if (
            (3 === n && 33554432 & t.flags && 48 & t.bindingFlags
              ? (16 & t.bindingFlags && Sr(e, i, n, r, s, l),
                32 & t.bindingFlags &&
                  Sr(Bn(e, t.nodeIndex).componentView, i, n, r, s, l))
              : Sr(e, i, n, r, s, l),
            16777216 & t.flags)
          ) {
            const i = Bn(e, t.nodeIndex).viewContainer._embeddedViews;
            for (let e = 0; e < i.length; e++) _r(i[e], n, r, s, l);
          }
          1 & t.flags &&
            !t.element.name &&
            wr(e, n, t.nodeIndex + 1, t.nodeIndex + t.childCount, r, s, l);
        }
      }
      function Sr(e, t, n, r, s, l) {
        const i = e.renderer;
        switch (n) {
          case 1:
            i.appendChild(r, t);
            break;
          case 2:
            i.insertBefore(r, t, s);
            break;
          case 3:
            i.removeChild(r, t);
            break;
          case 0:
            l.push(t);
        }
      }
      const kr = /^:([^:]+):(.+)$/;
      function Er(e) {
        if (':' === e[0]) {
          const t = e.match(kr);
          return [t[1], t[2]];
        }
        return ['', e];
      }
      function Tr(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) t |= e[n].flags;
        return t;
      }
      const Ar = new Object(),
        Nr = Jn(Dt),
        Or = Jn(Ee),
        Ir = Jn($e);
      function Rr(e, t, n, r) {
        return (
          (n = be(n)),
          { index: -1, deps: mr(r, me(t)), flags: e, token: t, value: n }
        );
      }
      function Pr(e, t, n = Dt.THROW_IF_NOT_FOUND) {
        const r = Me(e);
        try {
          if (8 & t.flags) return t.token;
          if ((2 & t.flags && (n = null), 1 & t.flags))
            return e._parent.get(t.token, n);
          const i = t.tokenKey;
          switch (i) {
            case Nr:
            case Or:
            case Ir:
              return e;
          }
          const o = e._def.providersByKey[i];
          let a;
          if (o) {
            let t = e._providers[o.index];
            return (
              void 0 === t && (t = e._providers[o.index] = Dr(e, o)),
              t === Ar ? void 0 : t
            );
          }
          if (
            (a = ge(t.token)) &&
            ((s = e),
            null != (l = a).providedIn &&
              ((function(e, t) {
                return e._def.modules.indexOf(t) > -1;
              })(s, l.providedIn) ||
                ('root' === l.providedIn && s._def.isRoot)))
          ) {
            const n = e._providers.length;
            return (
              (e._def.providers[n] = e._def.providersByKey[t.tokenKey] = {
                flags: 5120,
                value: a.factory,
                deps: [],
                index: n,
                token: t.token,
              }),
              (e._providers[n] = Ar),
              (e._providers[n] = Dr(e, e._def.providersByKey[t.tokenKey]))
            );
          }
          return 4 & t.flags ? n : e._parent.get(t.token, n);
        } finally {
          Me(r);
        }
        var s, l;
      }
      function Dr(e, t) {
        let n;
        switch (201347067 & t.flags) {
          case 512:
            n = (function(e, t, n) {
              const r = n.length;
              switch (r) {
                case 0:
                  return new t();
                case 1:
                  return new t(Pr(e, n[0]));
                case 2:
                  return new t(Pr(e, n[0]), Pr(e, n[1]));
                case 3:
                  return new t(Pr(e, n[0]), Pr(e, n[1]), Pr(e, n[2]));
                default:
                  const s = new Array(r);
                  for (let t = 0; t < r; t++) s[t] = Pr(e, n[t]);
                  return new t(...s);
              }
            })(e, t.value, t.deps);
            break;
          case 1024:
            n = (function(e, t, n) {
              const r = n.length;
              switch (r) {
                case 0:
                  return t();
                case 1:
                  return t(Pr(e, n[0]));
                case 2:
                  return t(Pr(e, n[0]), Pr(e, n[1]));
                case 3:
                  return t(Pr(e, n[0]), Pr(e, n[1]), Pr(e, n[2]));
                default:
                  const s = Array(r);
                  for (let t = 0; t < r; t++) s[t] = Pr(e, n[t]);
                  return t(...s);
              }
            })(e, t.value, t.deps);
            break;
          case 2048:
            n = Pr(e, t.deps[0]);
            break;
          case 256:
            n = t.value;
        }
        return (
          n === Ar ||
            null === n ||
            'object' != typeof n ||
            131072 & t.flags ||
            'function' != typeof n.ngOnDestroy ||
            (t.flags |= 131072),
          void 0 === n ? Ar : n
        );
      }
      function Vr(e, t) {
        const n = e.viewContainer._embeddedViews;
        if (((null == t || t >= n.length) && (t = n.length - 1), t < 0))
          return null;
        const r = n[t];
        return (
          (r.viewContainerParent = null),
          Be(n, t),
          Zn.dirtyParentQueries(r),
          Lr(r),
          r
        );
      }
      function Mr(e, t, n) {
        const r = t ? hr(t, t.def.lastRenderRootNode) : e.renderElement,
          s = n.renderer.parentNode(r),
          l = n.renderer.nextSibling(r);
        _r(n, 2, s, l, void 0);
      }
      function Lr(e) {
        _r(e, 3, null, null, void 0);
      }
      const Ur = new Object();
      function Fr(e, t, n, r, s, l) {
        return new jr(e, t, n, r, s, l);
      }
      class jr extends tn {
        constructor(e, t, n, r, s, l) {
          super(),
            (this.selector = e),
            (this.componentType = t),
            (this._inputs = r),
            (this._outputs = s),
            (this.ngContentSelectors = l),
            (this.viewDefFactory = n);
        }
        get inputs() {
          const e = [],
            t = this._inputs;
          for (let n in t) e.push({ propName: n, templateName: t[n] });
          return e;
        }
        get outputs() {
          const e = [];
          for (let t in this._outputs)
            e.push({ propName: t, templateName: this._outputs[t] });
          return e;
        }
        create(e, t, n, r) {
          if (!r) throw new Error('ngModule should be provided');
          const s = br(this.viewDefFactory),
            l = s.nodes[0].element.componentProvider.nodeIndex,
            i = Zn.createRootView(e, t || [], n, s, r, Ur),
            o = qn(i, l).instance;
          return (
            n &&
              i.renderer.setAttribute(
                Bn(i, 0).renderElement,
                'ng-version',
                vn.full
              ),
            new $r(i, new qr(i), o)
          );
        }
      }
      class $r extends en {
        constructor(e, t, n) {
          super(),
            (this._view = e),
            (this._viewRef = t),
            (this._component = n),
            (this._elDef = this._view.def.nodes[0]),
            (this.hostView = t),
            (this.changeDetectorRef = t),
            (this.instance = n);
        }
        get location() {
          return new cn(Bn(this._view, this._elDef.nodeIndex).renderElement);
        }
        get injector() {
          return new Qr(this._view, this._elDef);
        }
        get componentType() {
          return this._component.constructor;
        }
        destroy() {
          this._viewRef.destroy();
        }
        onDestroy(e) {
          this._viewRef.onDestroy(e);
        }
      }
      function Hr(e, t, n) {
        return new zr(e, t, n);
      }
      class zr {
        constructor(e, t, n) {
          (this._view = e),
            (this._elDef = t),
            (this._data = n),
            (this._embeddedViews = []);
        }
        get element() {
          return new cn(this._data.renderElement);
        }
        get injector() {
          return new Qr(this._view, this._elDef);
        }
        get parentInjector() {
          let e = this._view,
            t = this._elDef.parent;
          for (; !t && e; ) (t = cr(e)), (e = e.parent);
          return e ? new Qr(e, t) : new Qr(this._view, null);
        }
        clear() {
          for (let e = this._embeddedViews.length - 1; e >= 0; e--) {
            const t = Vr(this._data, e);
            Zn.destroyView(t);
          }
        }
        get(e) {
          const t = this._embeddedViews[e];
          if (t) {
            const e = new qr(t);
            return e.attachToViewContainerRef(this), e;
          }
          return null;
        }
        get length() {
          return this._embeddedViews.length;
        }
        createEmbeddedView(e, t, n) {
          const r = e.createEmbeddedView(t || {});
          return this.insert(r, n), r;
        }
        createComponent(e, t, n, r, s) {
          const l = n || this.parentInjector;
          s || e instanceof an || (s = l.get($e));
          const i = e.create(l, r, void 0, s);
          return this.insert(i.hostView, t), i;
        }
        insert(e, t) {
          if (e.destroyed)
            throw new Error(
              'Cannot insert a destroyed View in a ViewContainer!'
            );
          const n = e;
          return (
            (function(e, t, n, r) {
              let s = t.viewContainer._embeddedViews;
              null == n && (n = s.length),
                (r.viewContainerParent = e),
                ze(s, n, r),
                (function(e, t) {
                  const n = ur(t);
                  if (!n || n === e || 16 & t.state) return;
                  t.state |= 16;
                  let r = n.template._projectedViews;
                  r || (r = n.template._projectedViews = []),
                    r.push(t),
                    (function(e, t) {
                      if (4 & t.flags) return;
                      (e.nodeFlags |= 4), (t.flags |= 4);
                      let n = t.parent;
                      for (; n; ) (n.childFlags |= 4), (n = n.parent);
                    })(t.parent.def, t.parentNodeDef);
                })(t, r),
                Zn.dirtyParentQueries(r),
                Mr(t, n > 0 ? s[n - 1] : null, r);
            })(this._view, this._data, t, n._view),
            n.attachToViewContainerRef(this),
            e
          );
        }
        move(e, t) {
          if (e.destroyed)
            throw new Error('Cannot move a destroyed View in a ViewContainer!');
          const n = this._embeddedViews.indexOf(e._view);
          return (
            (function(e, t, n) {
              const r = e.viewContainer._embeddedViews,
                s = r[t];
              Be(r, t),
                null == n && (n = r.length),
                ze(r, n, s),
                Zn.dirtyParentQueries(s),
                Lr(s),
                Mr(e, n > 0 ? r[n - 1] : null, s);
            })(this._data, n, t),
            e
          );
        }
        indexOf(e) {
          return this._embeddedViews.indexOf(e._view);
        }
        remove(e) {
          const t = Vr(this._data, e);
          t && Zn.destroyView(t);
        }
        detach(e) {
          const t = Vr(this._data, e);
          return t ? new qr(t) : null;
        }
      }
      function Br(e) {
        return new qr(e);
      }
      class qr {
        constructor(e) {
          (this._view = e),
            (this._viewContainerRef = null),
            (this._appRef = null);
        }
        get rootNodes() {
          return (function(e) {
            const t = [];
            return _r(e, 0, void 0, void 0, t), t;
          })(this._view);
        }
        get context() {
          return this._view.context;
        }
        get destroyed() {
          return 0 != (128 & this._view.state);
        }
        markForCheck() {
          ir(this._view);
        }
        detach() {
          this._view.state &= -5;
        }
        detectChanges() {
          const e = this._view.root.rendererFactory;
          e.begin && e.begin();
          try {
            Zn.checkAndUpdateView(this._view);
          } finally {
            e.end && e.end();
          }
        }
        checkNoChanges() {
          Zn.checkNoChangesView(this._view);
        }
        reattach() {
          this._view.state |= 4;
        }
        onDestroy(e) {
          this._view.disposables || (this._view.disposables = []),
            this._view.disposables.push(e);
        }
        destroy() {
          this._appRef
            ? this._appRef.detachView(this)
            : this._viewContainerRef &&
              this._viewContainerRef.detach(
                this._viewContainerRef.indexOf(this)
              ),
            Zn.destroyView(this._view);
        }
        detachFromAppRef() {
          (this._appRef = null),
            Lr(this._view),
            Zn.dirtyParentQueries(this._view);
        }
        attachToAppRef(e) {
          if (this._viewContainerRef)
            throw new Error(
              'This view is already attached to a ViewContainer!'
            );
          this._appRef = e;
        }
        attachToViewContainerRef(e) {
          if (this._appRef)
            throw new Error(
              'This view is already attached directly to the ApplicationRef!'
            );
          this._viewContainerRef = e;
        }
      }
      function Gr(e, t) {
        return new Wr(e, t);
      }
      class Wr extends Dn {
        constructor(e, t) {
          super(), (this._parentView = e), (this._def = t);
        }
        createEmbeddedView(e) {
          return new qr(
            Zn.createEmbeddedView(
              this._parentView,
              this._def,
              this._def.element.template,
              e
            )
          );
        }
        get elementRef() {
          return new cn(
            Bn(this._parentView, this._def.nodeIndex).renderElement
          );
        }
      }
      function Zr(e, t) {
        return new Qr(e, t);
      }
      class Qr {
        constructor(e, t) {
          (this.view = e), (this.elDef = t);
        }
        get(e, t = Dt.THROW_IF_NOT_FOUND) {
          return Zn.resolveDep(
            this.view,
            this.elDef,
            !!this.elDef && 0 != (33554432 & this.elDef.flags),
            { flags: 0, token: e, tokenKey: Jn(e) },
            t
          );
        }
      }
      function Kr(e, t) {
        const n = e.def.nodes[t];
        if (1 & n.flags) {
          const t = Bn(e, n.nodeIndex);
          return n.element.template ? t.template : t.renderElement;
        }
        if (2 & n.flags) return zn(e, n.nodeIndex).renderText;
        if (20240 & n.flags) return qn(e, n.nodeIndex).instance;
        throw new Error(`Illegal state: read nodeValue for node index ${t}`);
      }
      function Jr(e) {
        return new Yr(e.renderer);
      }
      class Yr {
        constructor(e) {
          this.delegate = e;
        }
        selectRootElement(e) {
          return this.delegate.selectRootElement(e);
        }
        createElement(e, t) {
          const [n, r] = Er(t),
            s = this.delegate.createElement(r, n);
          return e && this.delegate.appendChild(e, s), s;
        }
        createViewRoot(e) {
          return e;
        }
        createTemplateAnchor(e) {
          const t = this.delegate.createComment('');
          return e && this.delegate.appendChild(e, t), t;
        }
        createText(e, t) {
          const n = this.delegate.createText(t);
          return e && this.delegate.appendChild(e, n), n;
        }
        projectNodes(e, t) {
          for (let n = 0; n < t.length; n++) this.delegate.appendChild(e, t[n]);
        }
        attachViewAfter(e, t) {
          const n = this.delegate.parentNode(e),
            r = this.delegate.nextSibling(e);
          for (let s = 0; s < t.length; s++)
            this.delegate.insertBefore(n, t[s], r);
        }
        detachView(e) {
          for (let t = 0; t < e.length; t++) {
            const n = e[t],
              r = this.delegate.parentNode(n);
            this.delegate.removeChild(r, n);
          }
        }
        destroyView(e, t) {
          for (let n = 0; n < t.length; n++) this.delegate.destroyNode(t[n]);
        }
        listen(e, t, n) {
          return this.delegate.listen(e, t, n);
        }
        listenGlobal(e, t, n) {
          return this.delegate.listen(e, t, n);
        }
        setElementProperty(e, t, n) {
          this.delegate.setProperty(e, t, n);
        }
        setElementAttribute(e, t, n) {
          const [r, s] = Er(t);
          null != n
            ? this.delegate.setAttribute(e, s, n, r)
            : this.delegate.removeAttribute(e, s, r);
        }
        setBindingDebugInfo(e, t, n) {}
        setElementClass(e, t, n) {
          n ? this.delegate.addClass(e, t) : this.delegate.removeClass(e, t);
        }
        setElementStyle(e, t, n) {
          null != n
            ? this.delegate.setStyle(e, t, n)
            : this.delegate.removeStyle(e, t);
        }
        invokeElementMethod(e, t, n) {
          e[t].apply(e, n);
        }
        setText(e, t) {
          this.delegate.setValue(e, t);
        }
        animate() {
          throw new Error('Renderer.animate is no longer supported!');
        }
      }
      function Xr(e, t, n, r) {
        return new es(e, t, n, r);
      }
      class es {
        constructor(e, t, n, r) {
          (this._moduleType = e),
            (this._parent = t),
            (this._bootstrapComponents = n),
            (this._def = r),
            (this._destroyListeners = []),
            (this._destroyed = !1),
            (this.injector = this),
            (function(e) {
              const t = e._def,
                n = (e._providers = new Array(t.providers.length));
              for (let r = 0; r < t.providers.length; r++) {
                const s = t.providers[r];
                4096 & s.flags || (void 0 === n[r] && (n[r] = Dr(e, s)));
              }
            })(this);
        }
        get(e, t = Dt.THROW_IF_NOT_FOUND, n = he.Default) {
          let r = 0;
          return (
            n & he.SkipSelf ? (r |= 1) : n & he.Self && (r |= 4),
            Pr(this, { token: e, tokenKey: Jn(e), flags: r }, t)
          );
        }
        get instance() {
          return this.get(this._moduleType);
        }
        get componentFactoryResolver() {
          return this.get(ln);
        }
        destroy() {
          if (this._destroyed)
            throw new Error(
              `The ng module ${me(
                this.instance.constructor
              )} has already been destroyed.`
            );
          (this._destroyed = !0),
            (function(e, t) {
              const n = e._def,
                r = new Set();
              for (let s = 0; s < n.providers.length; s++)
                if (131072 & n.providers[s].flags) {
                  const t = e._providers[s];
                  if (t && t !== Ar) {
                    const e = t.ngOnDestroy;
                    'function' != typeof e ||
                      r.has(t) ||
                      (e.apply(t), r.add(t));
                  }
                }
            })(this),
            this._destroyListeners.forEach(e => e());
        }
        onDestroy(e) {
          this._destroyListeners.push(e);
        }
      }
      const ts = Jn(dn),
        ns = Jn(fn),
        rs = Jn(cn),
        ss = Jn(Mn),
        ls = Jn(Dn),
        is = Jn(Ot),
        os = Jn(Dt),
        as = Jn(Ee);
      function us(e, t, n, r, s, l, i, o) {
        const a = [];
        if (i)
          for (let c in i) {
            const [e, t] = i[c];
            a[e] = {
              flags: 8,
              name: c,
              nonMinifiedName: t,
              ns: null,
              securityContext: null,
              suffix: null,
            };
          }
        const u = [];
        if (o)
          for (let c in o)
            u.push({ type: 1, propName: c, target: null, eventName: o[c] });
        return ds(e, (t |= 16384), n, r, s, s, l, a, u);
      }
      function cs(e, t, n) {
        return ds(-1, (e |= 16), null, 0, t, t, n);
      }
      function hs(e, t, n, r, s) {
        return ds(-1, e, t, 0, n, r, s);
      }
      function ds(e, t, n, r, s, l, i, o, a) {
        const { matchedQueries: u, references: c, matchedQueryIds: h } = fr(n);
        a || (a = []), o || (o = []), (l = be(l));
        const d = mr(i, me(s));
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: e,
          flags: t,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: u,
          matchedQueryIds: h,
          references: c,
          ngContentIndex: -1,
          childCount: r,
          bindings: o,
          bindingFlags: Tr(o),
          outputs: a,
          element: null,
          provider: { token: s, value: l, deps: d },
          text: null,
          query: null,
          ngContent: null,
        };
      }
      function ps(e, t) {
        return ys(e, t);
      }
      function gs(e, t) {
        let n = e;
        for (; n.parent && !dr(n); ) n = n.parent;
        return vs(n.parent, cr(n), !0, t.provider.value, t.provider.deps);
      }
      function fs(e, t) {
        const n = vs(
          e,
          t.parent,
          (32768 & t.flags) > 0,
          t.provider.value,
          t.provider.deps
        );
        if (t.outputs.length)
          for (let r = 0; r < t.outputs.length; r++) {
            const s = t.outputs[r],
              l = n[s.propName];
            if (!Yt(l))
              throw new Error(
                `@Output ${s.propName} not initialized in '${n.constructor.name}'.`
              );
            {
              const n = l.subscribe(ms(e, t.parent.nodeIndex, s.eventName));
              e.disposables[t.outputIndex + r] = n.unsubscribe.bind(n);
            }
          }
        return n;
      }
      function ms(e, t, n) {
        return r => ar(e, t, n, r);
      }
      function ys(e, t) {
        const n = (8192 & t.flags) > 0,
          r = t.provider;
        switch (201347067 & t.flags) {
          case 512:
            return vs(e, t.parent, n, r.value, r.deps);
          case 1024:
            return (function(e, t, n, r, s) {
              const l = s.length;
              switch (l) {
                case 0:
                  return r();
                case 1:
                  return r(_s(e, t, n, s[0]));
                case 2:
                  return r(_s(e, t, n, s[0]), _s(e, t, n, s[1]));
                case 3:
                  return r(
                    _s(e, t, n, s[0]),
                    _s(e, t, n, s[1]),
                    _s(e, t, n, s[2])
                  );
                default:
                  const i = Array(l);
                  for (let r = 0; r < l; r++) i[r] = _s(e, t, n, s[r]);
                  return r(...i);
              }
            })(e, t.parent, n, r.value, r.deps);
          case 2048:
            return _s(e, t.parent, n, r.deps[0]);
          case 256:
            return r.value;
        }
      }
      function vs(e, t, n, r, s) {
        const l = s.length;
        switch (l) {
          case 0:
            return new r();
          case 1:
            return new r(_s(e, t, n, s[0]));
          case 2:
            return new r(_s(e, t, n, s[0]), _s(e, t, n, s[1]));
          case 3:
            return new r(
              _s(e, t, n, s[0]),
              _s(e, t, n, s[1]),
              _s(e, t, n, s[2])
            );
          default:
            const i = new Array(l);
            for (let r = 0; r < l; r++) i[r] = _s(e, t, n, s[r]);
            return new r(...i);
        }
      }
      const bs = {};
      function _s(e, t, n, r, s = Dt.THROW_IF_NOT_FOUND) {
        if (8 & r.flags) return r.token;
        const l = e;
        2 & r.flags && (s = null);
        const i = r.tokenKey;
        i === is && (n = !(!t || !t.element.componentView)),
          t && 1 & r.flags && ((n = !1), (t = t.parent));
        let o = e;
        for (; o; ) {
          if (t)
            switch (i) {
              case ts:
                return Jr(ws(o, t, n));
              case ns:
                return ws(o, t, n).renderer;
              case rs:
                return new cn(Bn(o, t.nodeIndex).renderElement);
              case ss:
                return Bn(o, t.nodeIndex).viewContainer;
              case ls:
                if (t.element.template) return Bn(o, t.nodeIndex).template;
                break;
              case is:
                return Br(ws(o, t, n));
              case os:
              case as:
                return Zr(o, t);
              default:
                const e = (n
                  ? t.element.allProviders
                  : t.element.publicProviders)[i];
                if (e) {
                  let t = qn(o, e.nodeIndex);
                  return (
                    t ||
                      ((t = { instance: ys(o, e) }),
                      (o.nodes[e.nodeIndex] = t)),
                    t.instance
                  );
                }
            }
          (n = dr(o)), (t = cr(o)), (o = o.parent), 4 & r.flags && (o = null);
        }
        const a = l.root.injector.get(r.token, bs);
        return a !== bs || s === bs
          ? a
          : l.root.ngModule.injector.get(r.token, s);
      }
      function ws(e, t, n) {
        let r;
        if (n) r = Bn(e, t.nodeIndex).componentView;
        else for (r = e; r.parent && !dr(r); ) r = r.parent;
        return r;
      }
      function Cs(e, t, n, r, s, l) {
        if (32768 & n.flags) {
          const t = Bn(e, n.parent.nodeIndex).componentView;
          2 & t.def.flags && (t.state |= 8);
        }
        if (((t.instance[n.bindings[r].name] = s), 524288 & n.flags)) {
          l = l || {};
          const t = Zt.unwrap(e.oldValues[n.bindingIndex + r]);
          l[n.bindings[r].nonMinifiedName] = new Xt(t, s, 0 != (2 & e.state));
        }
        return (e.oldValues[n.bindingIndex + r] = s), l;
      }
      function xs(e, t) {
        if (!(e.def.nodeFlags & t)) return;
        const n = e.def.nodes;
        let r = 0;
        for (let s = 0; s < n.length; s++) {
          const l = n[s];
          let i = l.parent;
          for (
            !i && l.flags & t && ks(e, s, l.flags & t, r++),
              0 == (l.childFlags & t) && (s += l.childCount);
            i && 1 & i.flags && s === i.nodeIndex + i.childCount;

          )
            i.directChildFlags & t && (r = Ss(e, i, t, r)), (i = i.parent);
        }
      }
      function Ss(e, t, n, r) {
        for (let s = t.nodeIndex + 1; s <= t.nodeIndex + t.childCount; s++) {
          const t = e.def.nodes[s];
          t.flags & n && ks(e, s, t.flags & n, r++), (s += t.childCount);
        }
        return r;
      }
      function ks(e, t, n, r) {
        const s = qn(e, t);
        if (!s) return;
        const l = s.instance;
        l &&
          (Zn.setCurrentNode(e, t),
          1048576 & n && Hn(e, 512, r) && l.ngAfterContentInit(),
          2097152 & n && l.ngAfterContentChecked(),
          4194304 & n && Hn(e, 768, r) && l.ngAfterViewInit(),
          8388608 & n && l.ngAfterViewChecked(),
          131072 & n && l.ngOnDestroy());
      }
      const Es = new ke('SCHEDULER_TOKEN', {
          providedIn: 'root',
          factory: () => Ge,
        }),
        Ts = {},
        As = (function() {
          var e = {
            LocaleId: 0,
            DayPeriodsFormat: 1,
            DayPeriodsStandalone: 2,
            DaysFormat: 3,
            DaysStandalone: 4,
            MonthsFormat: 5,
            MonthsStandalone: 6,
            Eras: 7,
            FirstDayOfWeek: 8,
            WeekendRange: 9,
            DateFormat: 10,
            TimeFormat: 11,
            DateTimeFormat: 12,
            NumberSymbols: 13,
            NumberFormats: 14,
            CurrencySymbol: 15,
            CurrencyName: 16,
            Currencies: 17,
            PluralCase: 18,
            ExtraData: 19,
          };
          return (
            (e[e.LocaleId] = 'LocaleId'),
            (e[e.DayPeriodsFormat] = 'DayPeriodsFormat'),
            (e[e.DayPeriodsStandalone] = 'DayPeriodsStandalone'),
            (e[e.DaysFormat] = 'DaysFormat'),
            (e[e.DaysStandalone] = 'DaysStandalone'),
            (e[e.MonthsFormat] = 'MonthsFormat'),
            (e[e.MonthsStandalone] = 'MonthsStandalone'),
            (e[e.Eras] = 'Eras'),
            (e[e.FirstDayOfWeek] = 'FirstDayOfWeek'),
            (e[e.WeekendRange] = 'WeekendRange'),
            (e[e.DateFormat] = 'DateFormat'),
            (e[e.TimeFormat] = 'TimeFormat'),
            (e[e.DateTimeFormat] = 'DateTimeFormat'),
            (e[e.NumberSymbols] = 'NumberSymbols'),
            (e[e.NumberFormats] = 'NumberFormats'),
            (e[e.CurrencySymbol] = 'CurrencySymbol'),
            (e[e.CurrencyName] = 'CurrencyName'),
            (e[e.Currencies] = 'Currencies'),
            (e[e.PluralCase] = 'PluralCase'),
            (e[e.ExtraData] = 'ExtraData'),
            e
          );
        })(),
        Ns = void 0;
      var Os = [
        'en',
        [['a', 'p'], ['AM', 'PM'], Ns],
        [['AM', 'PM'], Ns, Ns],
        [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        ],
        Ns,
        [
          ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
        ],
        Ns,
        [
          ['B', 'A'],
          ['BC', 'AD'],
          ['Before Christ', 'Anno Domini'],
        ],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', Ns, "{1} 'at' {0}", Ns],
        [
          '.',
          ',',
          ';',
          '%',
          '+',
          '-',
          'E',
          '\xd7',
          '\u2030',
          '\u221e',
          'NaN',
          ':',
        ],
        ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
        '$',
        'US Dollar',
        {},
        function(e) {
          let t = Math.floor(Math.abs(e)),
            n = e.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === t && 0 === n ? 1 : 5;
        },
      ];
      const Is = 'en-US';
      let Rs = Is;
      function Ps(e) {
        var t;
        (t = 'Expected localeId to be defined'),
          null == e &&
            (function(e) {
              throw new Error(`ASSERTION ERROR: ${e}`);
            })(t),
          'string' == typeof e && (Rs = e.toLowerCase().replace(/_/g, '-'));
      }
      class Ds extends T {
        constructor(e = !1) {
          super(), (this.__isAsync = e);
        }
        emit(e) {
          super.next(e);
        }
        subscribe(e, t, n) {
          let r,
            s = e => null,
            l = () => null;
          e && 'object' == typeof e
            ? ((r = this.__isAsync
                ? t => {
                    setTimeout(() => e.next(t));
                  }
                : t => {
                    e.next(t);
                  }),
              e.error &&
                (s = this.__isAsync
                  ? t => {
                      setTimeout(() => e.error(t));
                    }
                  : t => {
                      e.error(t);
                    }),
              e.complete &&
                (l = this.__isAsync
                  ? () => {
                      setTimeout(() => e.complete());
                    }
                  : () => {
                      e.complete();
                    }))
            : ((r = this.__isAsync
                ? t => {
                    setTimeout(() => e(t));
                  }
                : t => {
                    e(t);
                  }),
              t &&
                (s = this.__isAsync
                  ? e => {
                      setTimeout(() => t(e));
                    }
                  : e => {
                      t(e);
                    }),
              n &&
                (l = this.__isAsync
                  ? () => {
                      setTimeout(() => n());
                    }
                  : () => {
                      n();
                    }));
          const i = super.subscribe(r, s, l);
          return e instanceof d && e.add(i), i;
        }
      }
      function Vs() {
        return this._results[qt()]();
      }
      class Ms {
        constructor() {
          (this.dirty = !0),
            (this._results = []),
            (this.changes = new Ds()),
            (this.length = 0);
          const e = qt(),
            t = Ms.prototype;
          t[e] || (t[e] = Vs);
        }
        map(e) {
          return this._results.map(e);
        }
        filter(e) {
          return this._results.filter(e);
        }
        find(e) {
          return this._results.find(e);
        }
        reduce(e, t) {
          return this._results.reduce(e, t);
        }
        forEach(e) {
          this._results.forEach(e);
        }
        some(e) {
          return this._results.some(e);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(e) {
          (this._results = (function e(t, n) {
            void 0 === n && (n = t);
            for (let r = 0; r < t.length; r++) {
              let s = t[r];
              Array.isArray(s)
                ? (n === t && (n = t.slice(0, r)), e(s, n))
                : n !== t && n.push(s);
            }
            return n;
          })(e)),
            (this.dirty = !1),
            (this.length = this._results.length),
            (this.last = this._results[this.length - 1]),
            (this.first = this._results[0]);
        }
        notifyOnChanges() {
          this.changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      const Ls = new ke('Application Initializer');
      class Us {
        constructor(e) {
          (this.appInits = e),
            (this.initialized = !1),
            (this.done = !1),
            (this.donePromise = new Promise((e, t) => {
              (this.resolve = e), (this.reject = t);
            }));
        }
        runInitializers() {
          if (this.initialized) return;
          const e = [],
            t = () => {
              (this.done = !0), this.resolve();
            };
          if (this.appInits)
            for (let n = 0; n < this.appInits.length; n++) {
              const t = this.appInits[n]();
              Jt(t) && e.push(t);
            }
          Promise.all(e)
            .then(() => {
              t();
            })
            .catch(e => {
              this.reject(e);
            }),
            0 === e.length && t(),
            (this.initialized = !0);
        }
      }
      const Fs = new ke('AppId');
      function js() {
        return `${$s()}${$s()}${$s()}`;
      }
      function $s() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const Hs = new ke('Platform Initializer'),
        zs = new ke('Platform ID'),
        Bs = new ke('appBootstrapListener');
      class qs {
        log(e) {
          console.log(e);
        }
        warn(e) {
          console.warn(e);
        }
      }
      const Gs = new ke('LocaleId'),
        Ws = !1;
      function Zs() {
        throw new Error('Runtime compiler is not loaded');
      }
      const Qs = Zs,
        Ks = Zs,
        Js = Zs,
        Ys = Zs;
      class Xs {
        constructor() {
          (this.compileModuleSync = Qs),
            (this.compileModuleAsync = Ks),
            (this.compileModuleAndAllComponentsSync = Js),
            (this.compileModuleAndAllComponentsAsync = Ys);
        }
        clearCache() {}
        clearCacheFor(e) {}
        getModuleId(e) {}
      }
      class el {}
      let tl, nl;
      function rl() {
        const e = Se.wtf;
        return !(!e || !(tl = e.trace) || ((nl = tl.events), 0));
      }
      const sl = rl();
      function ll(e, t) {
        return null;
      }
      const il = sl
          ? function(e, t = null) {
              return nl.createScope(e, t);
            }
          : (e, t) => ll,
        ol = sl
          ? function(e, t) {
              return tl.leaveScope(e, t), t;
            }
          : (e, t) => t,
        al = (() => Promise.resolve(0))();
      function ul(e) {
        'undefined' == typeof Zone
          ? al.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', e);
      }
      class cl {
        constructor({ enableLongStackTrace: e = !1 }) {
          if (
            ((this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Ds(!1)),
            (this.onMicrotaskEmpty = new Ds(!1)),
            (this.onStable = new Ds(!1)),
            (this.onError = new Ds(!1)),
            'undefined' == typeof Zone)
          )
            throw new Error('In this configuration Angular requires Zone.js');
          var t;
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec &&
              (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec &&
              (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            e &&
              Zone.longStackTraceZoneSpec &&
              (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            ((t = this)._inner = t._inner.fork({
              name: 'angular',
              properties: { isAngularZone: !0 },
              onInvokeTask: (e, n, r, s, l, i) => {
                try {
                  return gl(t), e.invokeTask(r, s, l, i);
                } finally {
                  fl(t);
                }
              },
              onInvoke: (e, n, r, s, l, i, o) => {
                try {
                  return gl(t), e.invoke(r, s, l, i, o);
                } finally {
                  fl(t);
                }
              },
              onHasTask: (e, n, r, s) => {
                e.hasTask(r, s),
                  n === r &&
                    ('microTask' == s.change
                      ? ((t.hasPendingMicrotasks = s.microTask), pl(t))
                      : 'macroTask' == s.change &&
                        (t.hasPendingMacrotasks = s.macroTask));
              },
              onHandleError: (e, n, r, s) => (
                e.handleError(r, s),
                t.runOutsideAngular(() => t.onError.emit(s)),
                !1
              ),
            }));
        }
        static isInAngularZone() {
          return !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!cl.isInAngularZone())
            throw new Error('Expected to be in Angular Zone, but it is not!');
        }
        static assertNotInAngularZone() {
          if (cl.isInAngularZone())
            throw new Error('Expected to not be in Angular Zone, but it is!');
        }
        run(e, t, n) {
          return this._inner.run(e, t, n);
        }
        runTask(e, t, n, r) {
          const s = this._inner,
            l = s.scheduleEventTask('NgZoneEvent: ' + r, e, dl, hl, hl);
          try {
            return s.runTask(l, t, n);
          } finally {
            s.cancelTask(l);
          }
        }
        runGuarded(e, t, n) {
          return this._inner.runGuarded(e, t, n);
        }
        runOutsideAngular(e) {
          return this._outer.run(e);
        }
      }
      function hl() {}
      const dl = {};
      function pl(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function gl(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function fl(e) {
        e._nesting--, pl(e);
      }
      class ml {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Ds()),
            (this.onMicrotaskEmpty = new Ds()),
            (this.onStable = new Ds()),
            (this.onError = new Ds());
        }
        run(e) {
          return e();
        }
        runGuarded(e) {
          return e();
        }
        runOutsideAngular(e) {
          return e();
        }
        runTask(e) {
          return e();
        }
      }
      class yl {
        constructor(e) {
          (this._ngZone = e),
            (this._pendingCount = 0),
            (this._isZoneStable = !0),
            (this._didWork = !1),
            (this._callbacks = []),
            (this.taskTrackingZone = null),
            this._watchAngularEvents(),
            e.run(() => {
              this.taskTrackingZone =
                'undefined' == typeof Zone
                  ? null
                  : Zone.current.get('TaskTrackingZone');
            });
        }
        _watchAngularEvents() {
          this._ngZone.onUnstable.subscribe({
            next: () => {
              (this._didWork = !0), (this._isZoneStable = !1);
            },
          }),
            this._ngZone.runOutsideAngular(() => {
              this._ngZone.onStable.subscribe({
                next: () => {
                  cl.assertNotInAngularZone(),
                    ul(() => {
                      (this._isZoneStable = !0), this._runCallbacksIfReady();
                    });
                },
              });
            });
        }
        increasePendingRequestCount() {
          return (
            (this._pendingCount += 1), (this._didWork = !0), this._pendingCount
          );
        }
        decreasePendingRequestCount() {
          if (((this._pendingCount -= 1), this._pendingCount < 0))
            throw new Error('pending async requests below zero');
          return this._runCallbacksIfReady(), this._pendingCount;
        }
        isStable() {
          return (
            this._isZoneStable &&
            0 === this._pendingCount &&
            !this._ngZone.hasPendingMacrotasks
          );
        }
        _runCallbacksIfReady() {
          if (this.isStable())
            ul(() => {
              for (; 0 !== this._callbacks.length; ) {
                let e = this._callbacks.pop();
                clearTimeout(e.timeoutId), e.doneCb(this._didWork);
              }
              this._didWork = !1;
            });
          else {
            let e = this.getPendingTasks();
            (this._callbacks = this._callbacks.filter(
              t =>
                !t.updateCb || !t.updateCb(e) || (clearTimeout(t.timeoutId), !1)
            )),
              (this._didWork = !0);
          }
        }
        getPendingTasks() {
          return this.taskTrackingZone
            ? this.taskTrackingZone.macroTasks.map(e => ({
                source: e.source,
                creationLocation: e.creationLocation,
                data: e.data,
              }))
            : [];
        }
        addCallback(e, t, n) {
          let r = -1;
          t &&
            t > 0 &&
            (r = setTimeout(() => {
              (this._callbacks = this._callbacks.filter(
                e => e.timeoutId !== r
              )),
                e(this._didWork, this.getPendingTasks());
            }, t)),
            this._callbacks.push({ doneCb: e, timeoutId: r, updateCb: n });
        }
        whenStable(e, t, n) {
          if (n && !this.taskTrackingZone)
            throw new Error(
              'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
            );
          this.addCallback(e, t, n), this._runCallbacksIfReady();
        }
        getPendingRequestCount() {
          return this._pendingCount;
        }
        findProviders(e, t, n) {
          return [];
        }
      }
      class vl {
        constructor() {
          (this._applications = new Map()), wl.addToWindow(this);
        }
        registerApplication(e, t) {
          this._applications.set(e, t);
        }
        unregisterApplication(e) {
          this._applications.delete(e);
        }
        unregisterAllApplications() {
          this._applications.clear();
        }
        getTestability(e) {
          return this._applications.get(e) || null;
        }
        getAllTestabilities() {
          return Array.from(this._applications.values());
        }
        getAllRootElements() {
          return Array.from(this._applications.keys());
        }
        findTestabilityInTree(e, t = !0) {
          return wl.findTestabilityInTree(this, e, t);
        }
      }
      class bl {
        addToWindow(e) {}
        findTestabilityInTree(e, t, n) {
          return null;
        }
      }
      let _l,
        wl = new bl(),
        Cl = function(e, t, n) {
          return e
            .get(el)
            .createCompiler([t])
            .compileModuleAsync(n);
        },
        xl = function(e) {
          return e instanceof an;
        };
      const Sl = new ke('AllowMultipleToken');
      class kl {
        constructor(e, t) {
          (this.name = e), (this.token = t);
        }
      }
      function El(e, t, n = []) {
        const r = `Platform: ${t}`,
          s = new ke(r);
        return (t = []) => {
          let l = Tl();
          if (!l || l.injector.get(Sl, !1))
            if (e) e(n.concat(t).concat({ provide: s, useValue: !0 }));
            else {
              const e = n.concat(t).concat({ provide: s, useValue: !0 });
              !(function(e) {
                if (_l && !_l.destroyed && !_l.injector.get(Sl, !1))
                  throw new Error(
                    'There can be only one platform. Destroy the previous one to create a new one.'
                  );
                _l = e.get(Al);
                const t = e.get(Hs, null);
                t && t.forEach(e => e());
              })(Dt.create({ providers: e, name: r }));
            }
          return (function(e) {
            const t = Tl();
            if (!t) throw new Error('No platform exists!');
            if (!t.injector.get(e, null))
              throw new Error(
                'A platform with a different configuration has been created. Please destroy it first.'
              );
            return t;
          })(s);
        };
      }
      function Tl() {
        return _l && !_l.destroyed ? _l : null;
      }
      class Al {
        constructor(e) {
          (this._injector = e),
            (this._modules = []),
            (this._destroyListeners = []),
            (this._destroyed = !1);
        }
        bootstrapModuleFactory(e, t) {
          const n =
              'noop' === (s = t ? t.ngZone : void 0)
                ? new ml()
                : ('zone.js' === s ? void 0 : s) ||
                  new cl({ enableLongStackTrace: nt() }),
            r = [{ provide: cl, useValue: n }];
          var s;
          return n.run(() => {
            const t = Dt.create({
                providers: r,
                parent: this.injector,
                name: e.moduleType.name,
              }),
              s = e.create(t),
              l = s.injector.get(Xe, null);
            if (!l)
              throw new Error(
                'No ErrorHandler. Is platform module (BrowserModule) included?'
              );
            return (
              Ws && Ps(s.injector.get(Gs, Is) || Is),
              s.onDestroy(() => Il(this._modules, s)),
              n.runOutsideAngular(() =>
                n.onError.subscribe({
                  next: e => {
                    l.handleError(e);
                  },
                })
              ),
              (function(e, t, n) {
                try {
                  const r = n();
                  return Jt(r)
                    ? r.catch(n => {
                        throw (t.runOutsideAngular(() => e.handleError(n)), n);
                      })
                    : r;
                } catch (r) {
                  throw (t.runOutsideAngular(() => e.handleError(r)), r);
                }
              })(l, n, () => {
                const e = s.injector.get(Us);
                return (
                  e.runInitializers(),
                  e.donePromise.then(() => (this._moduleDoBootstrap(s), s))
                );
              })
            );
          });
        }
        bootstrapModule(e, t = []) {
          const n = Nl({}, t);
          return Cl(this.injector, n, e).then(e =>
            this.bootstrapModuleFactory(e, n)
          );
        }
        _moduleDoBootstrap(e) {
          const t = e.injector.get(Ol);
          if (e._bootstrapComponents.length > 0)
            e._bootstrapComponents.forEach(e => t.bootstrap(e));
          else {
            if (!e.instance.ngDoBootstrap)
              throw new Error(
                `The module ${me(
                  e.instance.constructor
                )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ` +
                  'Please define one of these.'
              );
            e.instance.ngDoBootstrap(t);
          }
          this._modules.push(e);
        }
        onDestroy(e) {
          this._destroyListeners.push(e);
        }
        get injector() {
          return this._injector;
        }
        destroy() {
          if (this._destroyed)
            throw new Error('The platform has already been destroyed!');
          this._modules.slice().forEach(e => e.destroy()),
            this._destroyListeners.forEach(e => e()),
            (this._destroyed = !0);
        }
        get destroyed() {
          return this._destroyed;
        }
      }
      function Nl(e, t) {
        return Array.isArray(t) ? t.reduce(Nl, e) : Object.assign({}, e, t);
      }
      let Ol = (() => {
        class e {
          constructor(e, t, n, r, s, l) {
            (this._zone = e),
              (this._console = t),
              (this._injector = n),
              (this._exceptionHandler = r),
              (this._componentFactoryResolver = s),
              (this._initStatus = l),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._enforceNoNewChanges = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._enforceNoNewChanges = nt()),
              this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick();
                  });
                },
              });
            const i = new w(e => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    e.next(this._stable), e.complete();
                  });
              }),
              o = new w(e => {
                let t;
                this._zone.runOutsideAngular(() => {
                  t = this._zone.onStable.subscribe(() => {
                    cl.assertNotInAngularZone(),
                      ul(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), e.next(!0));
                      });
                  });
                });
                const n = this._zone.onUnstable.subscribe(() => {
                  cl.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        e.next(!1);
                      }));
                });
                return () => {
                  t.unsubscribe(), n.unsubscribe();
                };
              });
            this.isStable = (function(...e) {
              let t = Number.POSITIVE_INFINITY,
                n = null,
                r = e[e.length - 1];
              return (
                N(r)
                  ? ((n = e.pop()),
                    e.length > 1 &&
                      'number' == typeof e[e.length - 1] &&
                      (t = e.pop()))
                  : 'number' == typeof r && (t = e.pop()),
                null === n && 1 === e.length && e[0] instanceof w
                  ? e[0]
                  : J(t)(q(e, n))
              );
            })(
              i,
              o.pipe(e =>
                Y()(
                  (function(e, t) {
                    return function(t) {
                      let n;
                      n =
                        'function' == typeof e
                          ? e
                          : function() {
                              return e;
                            };
                      const r = Object.create(t, ne);
                      return (r.source = t), (r.subjectFactory = n), r;
                    };
                  })(se)(e)
                )
              )
            );
          }
          bootstrap(e, t) {
            if (!this._initStatus.done)
              throw new Error(
                'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.'
              );
            let n;
            (n =
              e instanceof tn
                ? e
                : this._componentFactoryResolver.resolveComponentFactory(e)),
              this.componentTypes.push(n.componentType);
            const r = xl(n) ? null : this._injector.get($e),
              s = n.create(Dt.NULL, [], t || n.selector, r);
            s.onDestroy(() => {
              this._unloadComponent(s);
            });
            const l = s.injector.get(yl, null);
            return (
              l &&
                s.injector
                  .get(vl)
                  .registerApplication(s.location.nativeElement, l),
              this._loadComponent(s),
              nt() &&
                this._console.log(
                  'Angular is running in the development mode. Call enableProdMode() to enable the production mode.'
                ),
              s
            );
          }
          tick() {
            if (this._runningTick)
              throw new Error('ApplicationRef.tick is called recursively');
            const t = e._tickScope();
            try {
              this._runningTick = !0;
              for (let e of this._views) e.detectChanges();
              if (this._enforceNoNewChanges)
                for (let e of this._views) e.checkNoChanges();
            } catch (n) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(n)
              );
            } finally {
              (this._runningTick = !1), ol(t);
            }
          }
          attachView(e) {
            const t = e;
            this._views.push(t), t.attachToAppRef(this);
          }
          detachView(e) {
            const t = e;
            Il(this._views, t), t.detachFromAppRef();
          }
          _loadComponent(e) {
            this.attachView(e.hostView),
              this.tick(),
              this.components.push(e),
              this._injector
                .get(Bs, [])
                .concat(this._bootstrapListeners)
                .forEach(t => t(e));
          }
          _unloadComponent(e) {
            this.detachView(e.hostView), Il(this.components, e);
          }
          ngOnDestroy() {
            this._views.slice().forEach(e => e.destroy());
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (e._tickScope = il('ApplicationRef#tick()')), e;
      })();
      function Il(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      class Rl {}
      const Pl = '#',
        Dl = 'NgFactory';
      class Vl {}
      const Ml = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' };
      class Ll {
        constructor(e, t) {
          (this._compiler = e), (this._config = t || Ml);
        }
        load(e) {
          return !Ws && this._compiler instanceof Xs
            ? this.loadFactory(e)
            : this.loadAndCompile(e);
        }
        loadAndCompile(e) {
          let [t, r] = e.split(Pl);
          return (
            void 0 === r && (r = 'default'),
            n('zn8P')(t)
              .then(e => e[r])
              .then(e => Ul(e, t, r))
              .then(e => this._compiler.compileModuleAsync(e))
          );
        }
        loadFactory(e) {
          let [t, r] = e.split(Pl),
            s = Dl;
          return (
            void 0 === r && ((r = 'default'), (s = '')),
            n('zn8P')(
              this._config.factoryPathPrefix +
                t +
                this._config.factoryPathSuffix
            )
              .then(e => e[r + s])
              .then(e => Ul(e, t, r))
          );
        }
      }
      function Ul(e, t, n) {
        if (!e) throw new Error(`Cannot find '${n}' in '${t}'`);
        return e;
      }
      class Fl {
        constructor(e, t) {
          (this.name = e), (this.callback = t);
        }
      }
      class jl {
        constructor(e, t, n) {
          (this.listeners = []),
            (this.parent = null),
            (this._debugContext = n),
            (this.nativeNode = e),
            t && t instanceof $l && t.addChild(this);
        }
        get injector() {
          return this._debugContext.injector;
        }
        get componentInstance() {
          return this._debugContext.component;
        }
        get context() {
          return this._debugContext.context;
        }
        get references() {
          return this._debugContext.references;
        }
        get providerTokens() {
          return this._debugContext.providerTokens;
        }
      }
      class $l extends jl {
        constructor(e, t, n) {
          super(e, t, n),
            (this.properties = {}),
            (this.attributes = {}),
            (this.classes = {}),
            (this.styles = {}),
            (this.childNodes = []),
            (this.nativeElement = e);
        }
        addChild(e) {
          e && (this.childNodes.push(e), (e.parent = this));
        }
        removeChild(e) {
          const t = this.childNodes.indexOf(e);
          -1 !== t && ((e.parent = null), this.childNodes.splice(t, 1));
        }
        insertChildrenAfter(e, t) {
          const n = this.childNodes.indexOf(e);
          -1 !== n &&
            (this.childNodes.splice(n + 1, 0, ...t),
            t.forEach(t => {
              t.parent && t.parent.removeChild(t), (e.parent = this);
            }));
        }
        insertBefore(e, t) {
          const n = this.childNodes.indexOf(e);
          -1 === n
            ? this.addChild(t)
            : (t.parent && t.parent.removeChild(t),
              (t.parent = this),
              this.childNodes.splice(n, 0, t));
        }
        query(e) {
          return this.queryAll(e)[0] || null;
        }
        queryAll(e) {
          const t = [];
          return (
            (function e(t, n, r) {
              t.childNodes.forEach(t => {
                t instanceof $l && (n(t) && r.push(t), e(t, n, r));
              });
            })(this, e, t),
            t
          );
        }
        queryAllNodes(e) {
          const t = [];
          return (
            (function e(t, n, r) {
              t instanceof $l &&
                t.childNodes.forEach(t => {
                  n(t) && r.push(t), t instanceof $l && e(t, n, r);
                });
            })(this, e, t),
            t
          );
        }
        get children() {
          return this.childNodes.filter(e => e instanceof $l);
        }
        triggerEventHandler(e, t) {
          this.listeners.forEach(n => {
            n.name == e && n.callback(t);
          });
        }
      }
      const Hl = new Map(),
        zl = function(e) {
          return Hl.get(e) || null;
        };
      function Bl(e) {
        Hl.set(e.nativeNode, e);
      }
      const ql = El(null, 'core', [
        { provide: zs, useValue: 'unknown' },
        { provide: Al, deps: [Dt] },
        { provide: vl, deps: [] },
        { provide: qs, deps: [] },
      ]);
      function Gl() {
        return Rn;
      }
      function Wl() {
        return Pn;
      }
      function Zl(e) {
        return e ? (Ws && Ps(e), e) : Is;
      }
      function Ql(e) {
        let t = [];
        return (
          e.onStable.subscribe(() => {
            for (; t.length; ) t.pop()();
          }),
          function(e) {
            t.push(e);
          }
        );
      }
      class Kl {
        constructor(e) {}
      }
      function Jl(e, t, n, r, s, l) {
        e |= 1;
        const { matchedQueries: i, references: o, matchedQueryIds: a } = fr(t);
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          flags: e,
          checkIndex: -1,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: i,
          matchedQueryIds: a,
          references: o,
          ngContentIndex: n,
          childCount: r,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: {
            ns: null,
            name: null,
            attrs: null,
            template: l ? br(l) : null,
            componentProvider: null,
            componentView: null,
            componentRendererType: null,
            publicProviders: null,
            allProviders: null,
            handleEvent: s || Qn,
          },
          provider: null,
          text: null,
          query: null,
          ngContent: null,
        };
      }
      function Yl(e, t, n, r, s, l, i = [], o, a, u, c, h) {
        u || (u = Qn);
        const { matchedQueries: d, references: p, matchedQueryIds: g } = fr(n);
        let f = null,
          m = null;
        l && ([f, m] = Er(l)), (o = o || []);
        const y = new Array(o.length);
        for (let _ = 0; _ < o.length; _++) {
          const [e, t, n] = o[_],
            [r, s] = Er(t);
          let l = void 0,
            i = void 0;
          switch (15 & e) {
            case 4:
              i = n;
              break;
            case 1:
            case 8:
              l = n;
          }
          y[_] = {
            flags: e,
            ns: r,
            name: s,
            nonMinifiedName: s,
            securityContext: l,
            suffix: i,
          };
        }
        a = a || [];
        const v = new Array(a.length);
        for (let _ = 0; _ < a.length; _++) {
          const [e, t] = a[_];
          v[_] = { type: 0, target: e, eventName: t, propName: null };
        }
        const b = (i = i || []).map(([e, t]) => {
          const [n, r] = Er(e);
          return [n, r, t];
        });
        return (
          (h = (function(e) {
            if (e && e.id === Xn) {
              const t =
                (null != e.encapsulation && e.encapsulation !== qe.None) ||
                e.styles.length ||
                Object.keys(e.data).length;
              e.id = t ? `c${nr++}` : er;
            }
            return e && e.id === er && (e = null), e || null;
          })(h)),
          c && (t |= 33554432),
          {
            nodeIndex: -1,
            parent: null,
            renderParent: null,
            bindingIndex: -1,
            outputIndex: -1,
            checkIndex: e,
            flags: (t |= 1),
            childFlags: 0,
            directChildFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: d,
            matchedQueryIds: g,
            references: p,
            ngContentIndex: r,
            childCount: s,
            bindings: y,
            bindingFlags: Tr(y),
            outputs: v,
            element: {
              ns: f,
              name: m,
              attrs: b,
              template: null,
              componentProvider: null,
              componentView: c || null,
              componentRendererType: h,
              publicProviders: null,
              allProviders: null,
              handleEvent: u || Qn,
            },
            provider: null,
            text: null,
            query: null,
            ngContent: null,
          }
        );
      }
      function Xl(e, t, n) {
        const r = n.element,
          s = e.root.selectorOrNode,
          l = e.renderer;
        let i;
        if (e.parent || !s) {
          i = r.name ? l.createElement(r.name, r.ns) : l.createComment('');
          const s = yr(e, t, n);
          s && l.appendChild(s, i);
        } else
          i = l.selectRootElement(
            s,
            !!r.componentRendererType &&
              r.componentRendererType.encapsulation === qe.ShadowDom
          );
        if (r.attrs)
          for (let o = 0; o < r.attrs.length; o++) {
            const [e, t, n] = r.attrs[o];
            l.setAttribute(i, t, n, e);
          }
        return i;
      }
      function ei(e, t, n, r) {
        for (let i = 0; i < n.outputs.length; i++) {
          const o = n.outputs[i],
            a = ti(
              e,
              n.nodeIndex,
              ((l = o.eventName), (s = o.target) ? `${s}:${l}` : l)
            );
          let u = o.target,
            c = e;
          'component' === o.target && ((u = null), (c = t));
          const h = c.renderer.listen(u || r, o.eventName, a);
          e.disposables[n.outputIndex + i] = h;
        }
        var s, l;
      }
      function ti(e, t, n) {
        return r => ar(e, t, n, r);
      }
      function ni(e, t, n, r) {
        if (!sr(e, t, n, r)) return !1;
        const s = t.bindings[n],
          l = Bn(e, t.nodeIndex),
          i = l.renderElement,
          o = s.name;
        switch (15 & s.flags) {
          case 1:
            !(function(e, t, n, r, s, l) {
              const i = t.securityContext;
              let o = i ? e.root.sanitizer.sanitize(i, l) : l;
              o = null != o ? o.toString() : null;
              const a = e.renderer;
              null != l
                ? a.setAttribute(n, s, o, r)
                : a.removeAttribute(n, s, r);
            })(e, s, i, s.ns, o, r);
            break;
          case 2:
            !(function(e, t, n, r) {
              const s = e.renderer;
              r ? s.addClass(t, n) : s.removeClass(t, n);
            })(e, i, o, r);
            break;
          case 4:
            !(function(e, t, n, r, s) {
              let l = e.root.sanitizer.sanitize(St.STYLE, s);
              if (null != l) {
                l = l.toString();
                const e = t.suffix;
                null != e && (l += e);
              } else l = null;
              const i = e.renderer;
              null != l ? i.setStyle(n, r, l) : i.removeStyle(n, r);
            })(e, s, i, o, r);
            break;
          case 8:
            !(function(e, t, n, r, s) {
              const l = t.securityContext;
              let i = l ? e.root.sanitizer.sanitize(l, s) : s;
              e.renderer.setProperty(n, r, i);
            })(
              33554432 & t.flags && 32 & s.flags ? l.componentView : e,
              s,
              i,
              o,
              r
            );
        }
        return !0;
      }
      function ri(e, t, n) {
        let r = [];
        for (let s in n) r.push({ propName: s, bindingType: n[s] });
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: -1,
          flags: e,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          ngContentIndex: -1,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          childCount: 0,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: { id: t, filterId: gr(t), bindings: r },
          ngContent: null,
        };
      }
      function si(e) {
        const t = e.def.nodeMatchedQueries;
        for (; e.parent && pr(e); ) {
          let n = e.parentNodeDef;
          e = e.parent;
          const r = n.nodeIndex + n.childCount;
          for (let s = 0; s <= r; s++) {
            const r = e.def.nodes[s];
            67108864 & r.flags &&
              536870912 & r.flags &&
              (r.query.filterId & t) === r.query.filterId &&
              Wn(e, s).setDirty(),
              (!(1 & r.flags && s + r.childCount < n.nodeIndex) &&
                67108864 & r.childFlags &&
                536870912 & r.childFlags) ||
                (s += r.childCount);
          }
        }
        if (134217728 & e.def.nodeFlags)
          for (let n = 0; n < e.def.nodes.length; n++) {
            const t = e.def.nodes[n];
            134217728 & t.flags && 536870912 & t.flags && Wn(e, n).setDirty(),
              (n += t.childCount);
          }
      }
      function li(e, t) {
        const n = Wn(e, t.nodeIndex);
        if (!n.dirty) return;
        let r,
          s = void 0;
        if (67108864 & t.flags) {
          const n = t.parent.parent;
          (s = ii(e, n.nodeIndex, n.nodeIndex + n.childCount, t.query, [])),
            (r = qn(e, t.parent.nodeIndex).instance);
        } else
          134217728 & t.flags &&
            ((s = ii(e, 0, e.def.nodes.length - 1, t.query, [])),
            (r = e.component));
        n.reset(s);
        const l = t.query.bindings;
        let i = !1;
        for (let o = 0; o < l.length; o++) {
          const e = l[o];
          let t;
          switch (e.bindingType) {
            case 0:
              t = n.first;
              break;
            case 1:
              (t = n), (i = !0);
          }
          r[e.propName] = t;
        }
        i && n.notifyOnChanges();
      }
      function ii(e, t, n, r, s) {
        for (let l = t; l <= n; l++) {
          const t = e.def.nodes[l],
            n = t.matchedQueries[r.id];
          if (
            (null != n && s.push(oi(e, t, n)),
            1 & t.flags &&
              t.element.template &&
              (t.element.template.nodeMatchedQueries & r.filterId) ===
                r.filterId)
          ) {
            const n = Bn(e, l);
            if (
              ((t.childMatchedQueries & r.filterId) === r.filterId &&
                (ii(e, l + 1, l + t.childCount, r, s), (l += t.childCount)),
              16777216 & t.flags)
            ) {
              const e = n.viewContainer._embeddedViews;
              for (let t = 0; t < e.length; t++) {
                const l = e[t],
                  i = ur(l);
                i && i === n && ii(l, 0, l.def.nodes.length - 1, r, s);
              }
            }
            const i = n.template._projectedViews;
            if (i)
              for (let e = 0; e < i.length; e++) {
                const t = i[e];
                ii(t, 0, t.def.nodes.length - 1, r, s);
              }
          }
          (t.childMatchedQueries & r.filterId) !== r.filterId &&
            (l += t.childCount);
        }
        return s;
      }
      function oi(e, t, n) {
        if (null != n)
          switch (n) {
            case 1:
              return Bn(e, t.nodeIndex).renderElement;
            case 0:
              return new cn(Bn(e, t.nodeIndex).renderElement);
            case 2:
              return Bn(e, t.nodeIndex).template;
            case 3:
              return Bn(e, t.nodeIndex).viewContainer;
            case 4:
              return qn(e, t.nodeIndex).instance;
          }
      }
      function ai(e, t, n) {
        const r = yr(e, t, n);
        r && Cr(e, n.ngContent.index, 1, r, null, void 0);
      }
      function ui(e, t) {
        return hi(128, e, new Array(t + 1));
      }
      function ci(e, t) {
        const n = Object.keys(t),
          r = n.length,
          s = new Array(r);
        for (let l = 0; l < r; l++) {
          const e = n[l];
          s[t[e]] = e;
        }
        return hi(64, e, s);
      }
      function hi(e, t, n) {
        const r = new Array(n.length);
        for (let s = 0; s < n.length; s++) {
          const e = n[s];
          r[s] = {
            flags: 8,
            name: e,
            ns: null,
            nonMinifiedName: e,
            securityContext: null,
            suffix: null,
          };
        }
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: t,
          flags: e,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: -1,
          childCount: 0,
          bindings: r,
          bindingFlags: Tr(r),
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: null,
          ngContent: null,
        };
      }
      function di(e, t, n) {
        const r = new Array(n.length - 1);
        for (let s = 1; s < n.length; s++)
          r[s - 1] = {
            flags: 8,
            name: null,
            ns: null,
            nonMinifiedName: null,
            securityContext: null,
            suffix: n[s],
          };
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: e,
          flags: 2,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: t,
          childCount: 0,
          bindings: r,
          bindingFlags: 8,
          outputs: [],
          element: null,
          provider: null,
          text: { prefix: n[0] },
          query: null,
          ngContent: null,
        };
      }
      function pi(e, t, n) {
        let r;
        const s = e.renderer;
        r = s.createText(n.text.prefix);
        const l = yr(e, t, n);
        return l && s.appendChild(l, r), { renderText: r };
      }
      function gi(e, t) {
        return (null != e ? e.toString() : '') + t.suffix;
      }
      function fi(e, t, n, r) {
        let s = 0,
          l = 0,
          i = 0,
          o = 0,
          a = 0,
          u = null,
          c = null,
          h = !1,
          d = !1,
          p = null;
        for (let g = 0; g < t.length; g++) {
          const e = t[g];
          if (
            ((e.nodeIndex = g),
            (e.parent = u),
            (e.bindingIndex = s),
            (e.outputIndex = l),
            (e.renderParent = c),
            (i |= e.flags),
            (a |= e.matchedQueryIds),
            e.element)
          ) {
            const t = e.element;
            (t.publicProviders = u
              ? u.element.publicProviders
              : Object.create(null)),
              (t.allProviders = t.publicProviders),
              (h = !1),
              (d = !1),
              e.element.template &&
                (a |= e.element.template.nodeMatchedQueries);
          }
          if (
            (yi(u, e, t.length),
            (s += e.bindings.length),
            (l += e.outputs.length),
            !c && 3 & e.flags && (p = e),
            20224 & e.flags)
          ) {
            h ||
              ((h = !0),
              (u.element.publicProviders = Object.create(
                u.element.publicProviders
              )),
              (u.element.allProviders = u.element.publicProviders));
            const t = 0 != (32768 & e.flags);
            0 == (8192 & e.flags) || t
              ? (u.element.publicProviders[Jn(e.provider.token)] = e)
              : (d ||
                  ((d = !0),
                  (u.element.allProviders = Object.create(
                    u.element.publicProviders
                  ))),
                (u.element.allProviders[Jn(e.provider.token)] = e)),
              t && (u.element.componentProvider = e);
          }
          if (
            (u
              ? ((u.childFlags |= e.flags),
                (u.directChildFlags |= e.flags),
                (u.childMatchedQueries |= e.matchedQueryIds),
                e.element &&
                  e.element.template &&
                  (u.childMatchedQueries |=
                    e.element.template.nodeMatchedQueries))
              : (o |= e.flags),
            e.childCount > 0)
          )
            (u = e), mi(e) || (c = e);
          else
            for (; u && g === u.nodeIndex + u.childCount; ) {
              const e = u.parent;
              e &&
                ((e.childFlags |= u.childFlags),
                (e.childMatchedQueries |= u.childMatchedQueries)),
                (c = (u = e) && mi(u) ? u.renderParent : u);
            }
        }
        return {
          factory: null,
          nodeFlags: i,
          rootNodeFlags: o,
          nodeMatchedQueries: a,
          flags: e,
          nodes: t,
          updateDirectives: n || Qn,
          updateRenderer: r || Qn,
          handleEvent: (e, n, r, s) => t[n].element.handleEvent(e, r, s),
          bindingCount: s,
          outputCount: l,
          lastRenderRootNode: p,
        };
      }
      function mi(e) {
        return 0 != (1 & e.flags) && null === e.element.name;
      }
      function yi(e, t, n) {
        const r = t.element && t.element.template;
        if (r) {
          if (!r.lastRenderRootNode)
            throw new Error(
              'Illegal State: Embedded templates without nodes are not allowed!'
            );
          if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags)
            throw new Error(
              `Illegal State: Last root node of a template can't have embedded views, at index ${t.nodeIndex}!`
            );
        }
        if (20224 & t.flags && 0 == (1 & (e ? e.flags : 0)))
          throw new Error(
            `Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ${t.nodeIndex}!`
          );
        if (t.query) {
          if (67108864 & t.flags && (!e || 0 == (16384 & e.flags)))
            throw new Error(
              `Illegal State: Content Query nodes need to be children of directives, at index ${t.nodeIndex}!`
            );
          if (134217728 & t.flags && e)
            throw new Error(
              `Illegal State: View Query nodes have to be top level nodes, at index ${t.nodeIndex}!`
            );
        }
        if (t.childCount) {
          const r = e ? e.nodeIndex + e.childCount : n - 1;
          if (t.nodeIndex <= r && t.nodeIndex + t.childCount > r)
            throw new Error(
              `Illegal State: childCount of node leads outside of parent, at index ${t.nodeIndex}!`
            );
        }
      }
      function vi(e, t, n, r) {
        const s = wi(e.root, e.renderer, e, t, n);
        return Ci(s, e.component, r), xi(s), s;
      }
      function bi(e, t, n) {
        const r = wi(e, e.renderer, null, null, t);
        return Ci(r, n, n), xi(r), r;
      }
      function _i(e, t, n, r) {
        const s = t.element.componentRendererType;
        let l;
        return (
          (l = s
            ? e.root.rendererFactory.createRenderer(r, s)
            : e.root.renderer),
          wi(e.root, l, e, t.element.componentProvider, n)
        );
      }
      function wi(e, t, n, r, s) {
        const l = new Array(s.nodes.length),
          i = s.outputCount ? new Array(s.outputCount) : null;
        return {
          def: s,
          parent: n,
          viewContainerParent: null,
          parentNodeDef: r,
          context: null,
          component: null,
          nodes: l,
          state: 13,
          root: e,
          renderer: t,
          oldValues: new Array(s.bindingCount),
          disposables: i,
          initIndex: -1,
        };
      }
      function Ci(e, t, n) {
        (e.component = t), (e.context = n);
      }
      function xi(e) {
        let t;
        dr(e) &&
          (t = Bn(e.parent, e.parentNodeDef.parent.nodeIndex).renderElement);
        const n = e.def,
          r = e.nodes;
        for (let s = 0; s < n.nodes.length; s++) {
          const l = n.nodes[s];
          let i;
          switch ((Zn.setCurrentNode(e, s), 201347067 & l.flags)) {
            case 1:
              const n = Xl(e, t, l);
              let o = void 0;
              if (33554432 & l.flags) {
                const t = br(l.element.componentView);
                o = Zn.createComponentView(e, l, t, n);
              }
              ei(e, o, l, n),
                (i = {
                  renderElement: n,
                  componentView: o,
                  viewContainer: null,
                  template: l.element.template ? Gr(e, l) : void 0,
                }),
                16777216 & l.flags && (i.viewContainer = Hr(e, l, i));
              break;
            case 2:
              i = pi(e, t, l);
              break;
            case 512:
            case 1024:
            case 2048:
            case 256:
              (i = r[s]) || 4096 & l.flags || (i = { instance: ps(e, l) });
              break;
            case 16:
              i = { instance: gs(e, l) };
              break;
            case 16384:
              (i = r[s]) || (i = { instance: fs(e, l) }),
                32768 & l.flags &&
                  Ci(
                    Bn(e, l.parent.nodeIndex).componentView,
                    i.instance,
                    i.instance
                  );
              break;
            case 32:
            case 64:
            case 128:
              i = { value: void 0 };
              break;
            case 67108864:
            case 134217728:
              i = new Ms();
              break;
            case 8:
              ai(e, t, l), (i = void 0);
          }
          r[s] = i;
        }
        Ri(e, Ii.CreateViewNodes), Mi(e, 201326592, 268435456, 0);
      }
      function Si(e) {
        Ti(e),
          Zn.updateDirectives(e, 1),
          Pi(e, Ii.CheckNoChanges),
          Zn.updateRenderer(e, 1),
          Ri(e, Ii.CheckNoChanges),
          (e.state &= -97);
      }
      function ki(e) {
        1 & e.state ? ((e.state &= -2), (e.state |= 2)) : (e.state &= -3),
          $n(e, 0, 256),
          Ti(e),
          Zn.updateDirectives(e, 0),
          Pi(e, Ii.CheckAndUpdate),
          Mi(e, 67108864, 536870912, 0);
        let t = $n(e, 256, 512);
        xs(e, 2097152 | (t ? 1048576 : 0)),
          Zn.updateRenderer(e, 0),
          Ri(e, Ii.CheckAndUpdate),
          Mi(e, 134217728, 536870912, 0),
          xs(e, 8388608 | ((t = $n(e, 512, 768)) ? 4194304 : 0)),
          2 & e.def.flags && (e.state &= -9),
          (e.state &= -97),
          $n(e, 768, 1024);
      }
      function Ei(e, t, n, r, s, l, i, o, a, u, c, h, d) {
        return 0 === n
          ? (function(e, t, n, r, s, l, i, o, a, u, c, h) {
              switch (201347067 & t.flags) {
                case 1:
                  return (function(e, t, n, r, s, l, i, o, a, u, c, h) {
                    const d = t.bindings.length;
                    let p = !1;
                    return (
                      d > 0 && ni(e, t, 0, n) && (p = !0),
                      d > 1 && ni(e, t, 1, r) && (p = !0),
                      d > 2 && ni(e, t, 2, s) && (p = !0),
                      d > 3 && ni(e, t, 3, l) && (p = !0),
                      d > 4 && ni(e, t, 4, i) && (p = !0),
                      d > 5 && ni(e, t, 5, o) && (p = !0),
                      d > 6 && ni(e, t, 6, a) && (p = !0),
                      d > 7 && ni(e, t, 7, u) && (p = !0),
                      d > 8 && ni(e, t, 8, c) && (p = !0),
                      d > 9 && ni(e, t, 9, h) && (p = !0),
                      p
                    );
                  })(e, t, n, r, s, l, i, o, a, u, c, h);
                case 2:
                  return (function(e, t, n, r, s, l, i, o, a, u, c, h) {
                    let d = !1;
                    const p = t.bindings,
                      g = p.length;
                    if (
                      (g > 0 && sr(e, t, 0, n) && (d = !0),
                      g > 1 && sr(e, t, 1, r) && (d = !0),
                      g > 2 && sr(e, t, 2, s) && (d = !0),
                      g > 3 && sr(e, t, 3, l) && (d = !0),
                      g > 4 && sr(e, t, 4, i) && (d = !0),
                      g > 5 && sr(e, t, 5, o) && (d = !0),
                      g > 6 && sr(e, t, 6, a) && (d = !0),
                      g > 7 && sr(e, t, 7, u) && (d = !0),
                      g > 8 && sr(e, t, 8, c) && (d = !0),
                      g > 9 && sr(e, t, 9, h) && (d = !0),
                      d)
                    ) {
                      let d = t.text.prefix;
                      g > 0 && (d += gi(n, p[0])),
                        g > 1 && (d += gi(r, p[1])),
                        g > 2 && (d += gi(s, p[2])),
                        g > 3 && (d += gi(l, p[3])),
                        g > 4 && (d += gi(i, p[4])),
                        g > 5 && (d += gi(o, p[5])),
                        g > 6 && (d += gi(a, p[6])),
                        g > 7 && (d += gi(u, p[7])),
                        g > 8 && (d += gi(c, p[8])),
                        g > 9 && (d += gi(h, p[9]));
                      const f = zn(e, t.nodeIndex).renderText;
                      e.renderer.setValue(f, d);
                    }
                    return d;
                  })(e, t, n, r, s, l, i, o, a, u, c, h);
                case 16384:
                  return (function(e, t, n, r, s, l, i, o, a, u, c, h) {
                    const d = qn(e, t.nodeIndex),
                      p = d.instance;
                    let g = !1,
                      f = void 0;
                    const m = t.bindings.length;
                    return (
                      m > 0 &&
                        rr(e, t, 0, n) &&
                        ((g = !0), (f = Cs(e, d, t, 0, n, f))),
                      m > 1 &&
                        rr(e, t, 1, r) &&
                        ((g = !0), (f = Cs(e, d, t, 1, r, f))),
                      m > 2 &&
                        rr(e, t, 2, s) &&
                        ((g = !0), (f = Cs(e, d, t, 2, s, f))),
                      m > 3 &&
                        rr(e, t, 3, l) &&
                        ((g = !0), (f = Cs(e, d, t, 3, l, f))),
                      m > 4 &&
                        rr(e, t, 4, i) &&
                        ((g = !0), (f = Cs(e, d, t, 4, i, f))),
                      m > 5 &&
                        rr(e, t, 5, o) &&
                        ((g = !0), (f = Cs(e, d, t, 5, o, f))),
                      m > 6 &&
                        rr(e, t, 6, a) &&
                        ((g = !0), (f = Cs(e, d, t, 6, a, f))),
                      m > 7 &&
                        rr(e, t, 7, u) &&
                        ((g = !0), (f = Cs(e, d, t, 7, u, f))),
                      m > 8 &&
                        rr(e, t, 8, c) &&
                        ((g = !0), (f = Cs(e, d, t, 8, c, f))),
                      m > 9 &&
                        rr(e, t, 9, h) &&
                        ((g = !0), (f = Cs(e, d, t, 9, h, f))),
                      f && p.ngOnChanges(f),
                      65536 & t.flags &&
                        Hn(e, 256, t.nodeIndex) &&
                        p.ngOnInit(),
                      262144 & t.flags && p.ngDoCheck(),
                      g
                    );
                  })(e, t, n, r, s, l, i, o, a, u, c, h);
                case 32:
                case 64:
                case 128:
                  return (function(e, t, n, r, s, l, i, o, a, u, c, h) {
                    const d = t.bindings;
                    let p = !1;
                    const g = d.length;
                    if (
                      (g > 0 && sr(e, t, 0, n) && (p = !0),
                      g > 1 && sr(e, t, 1, r) && (p = !0),
                      g > 2 && sr(e, t, 2, s) && (p = !0),
                      g > 3 && sr(e, t, 3, l) && (p = !0),
                      g > 4 && sr(e, t, 4, i) && (p = !0),
                      g > 5 && sr(e, t, 5, o) && (p = !0),
                      g > 6 && sr(e, t, 6, a) && (p = !0),
                      g > 7 && sr(e, t, 7, u) && (p = !0),
                      g > 8 && sr(e, t, 8, c) && (p = !0),
                      g > 9 && sr(e, t, 9, h) && (p = !0),
                      p)
                    ) {
                      const p = Gn(e, t.nodeIndex);
                      let f;
                      switch (201347067 & t.flags) {
                        case 32:
                          (f = new Array(d.length)),
                            g > 0 && (f[0] = n),
                            g > 1 && (f[1] = r),
                            g > 2 && (f[2] = s),
                            g > 3 && (f[3] = l),
                            g > 4 && (f[4] = i),
                            g > 5 && (f[5] = o),
                            g > 6 && (f[6] = a),
                            g > 7 && (f[7] = u),
                            g > 8 && (f[8] = c),
                            g > 9 && (f[9] = h);
                          break;
                        case 64:
                          (f = {}),
                            g > 0 && (f[d[0].name] = n),
                            g > 1 && (f[d[1].name] = r),
                            g > 2 && (f[d[2].name] = s),
                            g > 3 && (f[d[3].name] = l),
                            g > 4 && (f[d[4].name] = i),
                            g > 5 && (f[d[5].name] = o),
                            g > 6 && (f[d[6].name] = a),
                            g > 7 && (f[d[7].name] = u),
                            g > 8 && (f[d[8].name] = c),
                            g > 9 && (f[d[9].name] = h);
                          break;
                        case 128:
                          const e = n;
                          switch (g) {
                            case 1:
                              f = e.transform(n);
                              break;
                            case 2:
                              f = e.transform(r);
                              break;
                            case 3:
                              f = e.transform(r, s);
                              break;
                            case 4:
                              f = e.transform(r, s, l);
                              break;
                            case 5:
                              f = e.transform(r, s, l, i);
                              break;
                            case 6:
                              f = e.transform(r, s, l, i, o);
                              break;
                            case 7:
                              f = e.transform(r, s, l, i, o, a);
                              break;
                            case 8:
                              f = e.transform(r, s, l, i, o, a, u);
                              break;
                            case 9:
                              f = e.transform(r, s, l, i, o, a, u, c);
                              break;
                            case 10:
                              f = e.transform(r, s, l, i, o, a, u, c, h);
                          }
                      }
                      p.value = f;
                    }
                    return p;
                  })(e, t, n, r, s, l, i, o, a, u, c, h);
                default:
                  throw 'unreachable';
              }
            })(e, t, r, s, l, i, o, a, u, c, h, d)
          : (function(e, t, n) {
              switch (201347067 & t.flags) {
                case 1:
                  return (function(e, t, n) {
                    let r = !1;
                    for (let s = 0; s < n.length; s++)
                      ni(e, t, s, n[s]) && (r = !0);
                    return r;
                  })(e, t, n);
                case 2:
                  return (function(e, t, n) {
                    const r = t.bindings;
                    let s = !1;
                    for (let l = 0; l < n.length; l++)
                      sr(e, t, l, n[l]) && (s = !0);
                    if (s) {
                      let s = '';
                      for (let e = 0; e < n.length; e++) s += gi(n[e], r[e]);
                      s = t.text.prefix + s;
                      const l = zn(e, t.nodeIndex).renderText;
                      e.renderer.setValue(l, s);
                    }
                    return s;
                  })(e, t, n);
                case 16384:
                  return (function(e, t, n) {
                    const r = qn(e, t.nodeIndex),
                      s = r.instance;
                    let l = !1,
                      i = void 0;
                    for (let o = 0; o < n.length; o++)
                      rr(e, t, o, n[o]) &&
                        ((l = !0), (i = Cs(e, r, t, o, n[o], i)));
                    return (
                      i && s.ngOnChanges(i),
                      65536 & t.flags &&
                        Hn(e, 256, t.nodeIndex) &&
                        s.ngOnInit(),
                      262144 & t.flags && s.ngDoCheck(),
                      l
                    );
                  })(e, t, n);
                case 32:
                case 64:
                case 128:
                  return (function(e, t, n) {
                    const r = t.bindings;
                    let s = !1;
                    for (let l = 0; l < n.length; l++)
                      sr(e, t, l, n[l]) && (s = !0);
                    if (s) {
                      const s = Gn(e, t.nodeIndex);
                      let l;
                      switch (201347067 & t.flags) {
                        case 32:
                          l = n;
                          break;
                        case 64:
                          l = {};
                          for (let s = 0; s < n.length; s++)
                            l[r[s].name] = n[s];
                          break;
                        case 128:
                          const e = n[0],
                            t = n.slice(1);
                          l = e.transform(...t);
                      }
                      s.value = l;
                    }
                    return s;
                  })(e, t, n);
                default:
                  throw 'unreachable';
              }
            })(e, t, r);
      }
      function Ti(e) {
        const t = e.def;
        if (4 & t.nodeFlags)
          for (let n = 0; n < t.nodes.length; n++) {
            const r = t.nodes[n];
            if (4 & r.flags) {
              const t = Bn(e, n).template._projectedViews;
              if (t)
                for (let n = 0; n < t.length; n++) {
                  const r = t[n];
                  (r.state |= 32), or(r, e);
                }
            } else 0 == (4 & r.childFlags) && (n += r.childCount);
          }
      }
      function Ai(e, t, n, r, s, l, i, o, a, u, c, h, d) {
        return (
          0 === n
            ? (function(e, t, n, r, s, l, i, o, a, u, c, h) {
                const d = t.bindings.length;
                d > 0 && lr(e, t, 0, n),
                  d > 1 && lr(e, t, 1, r),
                  d > 2 && lr(e, t, 2, s),
                  d > 3 && lr(e, t, 3, l),
                  d > 4 && lr(e, t, 4, i),
                  d > 5 && lr(e, t, 5, o),
                  d > 6 && lr(e, t, 6, a),
                  d > 7 && lr(e, t, 7, u),
                  d > 8 && lr(e, t, 8, c),
                  d > 9 && lr(e, t, 9, h);
              })(e, t, r, s, l, i, o, a, u, c, h, d)
            : (function(e, t, n) {
                for (let r = 0; r < n.length; r++) lr(e, t, r, n[r]);
              })(e, t, r),
          !1
        );
      }
      function Ni(e, t) {
        if (Wn(e, t.nodeIndex).dirty)
          throw Un(
            Zn.createDebugContext(e, t.nodeIndex),
            `Query ${t.query.id} not dirty`,
            `Query ${t.query.id} dirty`,
            0 != (1 & e.state)
          );
      }
      function Oi(e) {
        if (!(128 & e.state)) {
          if (
            (Pi(e, Ii.Destroy), Ri(e, Ii.Destroy), xs(e, 131072), e.disposables)
          )
            for (let t = 0; t < e.disposables.length; t++) e.disposables[t]();
          !(function(e) {
            if (!(16 & e.state)) return;
            const t = ur(e);
            if (t) {
              const n = t.template._projectedViews;
              n && (Be(n, n.indexOf(e)), Zn.dirtyParentQueries(e));
            }
          })(e),
            e.renderer.destroyNode &&
              (function(e) {
                const t = e.def.nodes.length;
                for (let n = 0; n < t; n++) {
                  const t = e.def.nodes[n];
                  1 & t.flags
                    ? e.renderer.destroyNode(Bn(e, n).renderElement)
                    : 2 & t.flags
                    ? e.renderer.destroyNode(zn(e, n).renderText)
                    : (67108864 & t.flags || 134217728 & t.flags) &&
                      Wn(e, n).destroy();
                }
              })(e),
            dr(e) && e.renderer.destroy(),
            (e.state |= 128);
        }
      }
      const Ii = (function() {
        var e = {
          CreateViewNodes: 0,
          CheckNoChanges: 1,
          CheckNoChangesProjectedViews: 2,
          CheckAndUpdate: 3,
          CheckAndUpdateProjectedViews: 4,
          Destroy: 5,
        };
        return (
          (e[e.CreateViewNodes] = 'CreateViewNodes'),
          (e[e.CheckNoChanges] = 'CheckNoChanges'),
          (e[e.CheckNoChangesProjectedViews] = 'CheckNoChangesProjectedViews'),
          (e[e.CheckAndUpdate] = 'CheckAndUpdate'),
          (e[e.CheckAndUpdateProjectedViews] = 'CheckAndUpdateProjectedViews'),
          (e[e.Destroy] = 'Destroy'),
          e
        );
      })();
      function Ri(e, t) {
        const n = e.def;
        if (33554432 & n.nodeFlags)
          for (let r = 0; r < n.nodes.length; r++) {
            const s = n.nodes[r];
            33554432 & s.flags
              ? Di(Bn(e, r).componentView, t)
              : 0 == (33554432 & s.childFlags) && (r += s.childCount);
          }
      }
      function Pi(e, t) {
        const n = e.def;
        if (16777216 & n.nodeFlags)
          for (let r = 0; r < n.nodes.length; r++) {
            const s = n.nodes[r];
            if (16777216 & s.flags) {
              const n = Bn(e, r).viewContainer._embeddedViews;
              for (let e = 0; e < n.length; e++) Di(n[e], t);
            } else 0 == (16777216 & s.childFlags) && (r += s.childCount);
          }
      }
      function Di(e, t) {
        const n = e.state;
        switch (t) {
          case Ii.CheckNoChanges:
            0 == (128 & n) &&
              (12 == (12 & n)
                ? Si(e)
                : 64 & n && Vi(e, Ii.CheckNoChangesProjectedViews));
            break;
          case Ii.CheckNoChangesProjectedViews:
            0 == (128 & n) && (32 & n ? Si(e) : 64 & n && Vi(e, t));
            break;
          case Ii.CheckAndUpdate:
            0 == (128 & n) &&
              (12 == (12 & n)
                ? ki(e)
                : 64 & n && Vi(e, Ii.CheckAndUpdateProjectedViews));
            break;
          case Ii.CheckAndUpdateProjectedViews:
            0 == (128 & n) && (32 & n ? ki(e) : 64 & n && Vi(e, t));
            break;
          case Ii.Destroy:
            Oi(e);
            break;
          case Ii.CreateViewNodes:
            xi(e);
        }
      }
      function Vi(e, t) {
        Pi(e, t), Ri(e, t);
      }
      function Mi(e, t, n, r) {
        if (!(e.def.nodeFlags & t && e.def.nodeFlags & n)) return;
        const s = e.def.nodes.length;
        for (let l = 0; l < s; l++) {
          const s = e.def.nodes[l];
          if (s.flags & t && s.flags & n)
            switch ((Zn.setCurrentNode(e, s.nodeIndex), r)) {
              case 0:
                li(e, s);
                break;
              case 1:
                Ni(e, s);
            }
          (s.childFlags & t && s.childFlags & n) || (l += s.childCount);
        }
      }
      let Li = !1;
      function Ui(e, t, n, r, s, l) {
        const i = s.injector.get(pn);
        return bi(ji(e, s, i, t, n), r, l);
      }
      function Fi(e, t, n, r, s, l) {
        const i = s.injector.get(pn),
          o = ji(e, s, new bo(i), t, n),
          a = Ki(r);
        return yo(no.create, bi, null, [o, a, l]);
      }
      function ji(e, t, n, r, s) {
        const l = t.injector.get(kt),
          i = t.injector.get(Xe),
          o = n.createRenderer(null, null);
        return {
          ngModule: t,
          injector: e,
          projectableNodes: r,
          selectorOrNode: s,
          sanitizer: l,
          rendererFactory: n,
          renderer: o,
          errorHandler: i,
        };
      }
      function $i(e, t, n, r) {
        const s = Ki(n);
        return yo(no.create, vi, null, [e, t, s, r]);
      }
      function Hi(e, t, n, r) {
        return (
          (n = Gi.get(t.element.componentProvider.provider.token) || Ki(n)),
          yo(no.create, _i, null, [e, t, n, r])
        );
      }
      function zi(e, t, n, r) {
        return Xr(
          e,
          t,
          n,
          (function(e) {
            const { hasOverrides: t, hasDeprecatedOverrides: n } = (function(
              e
            ) {
              let t = !1,
                n = !1;
              return 0 === Bi.size
                ? { hasOverrides: t, hasDeprecatedOverrides: n }
                : (e.providers.forEach(e => {
                    const r = Bi.get(e.token);
                    3840 & e.flags &&
                      r &&
                      ((t = !0), (n = n || r.deprecatedBehavior));
                  }),
                  e.modules.forEach(e => {
                    qi.forEach((r, s) => {
                      ge(s).providedIn === e &&
                        ((t = !0), (n = n || r.deprecatedBehavior));
                    });
                  }),
                  { hasOverrides: t, hasDeprecatedOverrides: n });
            })(e);
            return t
              ? ((function(e) {
                  for (let t = 0; t < e.providers.length; t++) {
                    const r = e.providers[t];
                    n && (r.flags |= 4096);
                    const s = Bi.get(r.token);
                    s &&
                      ((r.flags = (-3841 & r.flags) | s.flags),
                      (r.deps = mr(s.deps)),
                      (r.value = s.value));
                  }
                  if (qi.size > 0) {
                    let t = new Set(e.modules);
                    qi.forEach((r, s) => {
                      if (t.has(ge(s).providedIn)) {
                        let t = {
                          token: s,
                          flags: r.flags | (n ? 4096 : 0),
                          deps: mr(r.deps),
                          value: r.value,
                          index: e.providers.length,
                        };
                        e.providers.push(t), (e.providersByKey[Jn(s)] = t);
                      }
                    });
                  }
                })((e = e.factory(() => Qn))),
                e)
              : e;
          })(r)
        );
      }
      const Bi = new Map(),
        qi = new Map(),
        Gi = new Map();
      function Wi(e) {
        let t;
        Bi.set(e.token, e),
          'function' == typeof e.token &&
            (t = ge(e.token)) &&
            'function' == typeof t.providedIn &&
            qi.set(e.token, e);
      }
      function Zi(e, t) {
        const n = br(t.viewDefFactory),
          r = br(n.nodes[0].element.componentView);
        Gi.set(e, r);
      }
      function Qi() {
        Bi.clear(), qi.clear(), Gi.clear();
      }
      function Ki(e) {
        if (0 === Bi.size) return e;
        const t = (function(e) {
          const t = [];
          let n = null;
          for (let r = 0; r < e.nodes.length; r++) {
            const s = e.nodes[r];
            1 & s.flags && (n = s),
              n &&
                3840 & s.flags &&
                Bi.has(s.provider.token) &&
                (t.push(n.nodeIndex), (n = null));
          }
          return t;
        })(e);
        if (0 === t.length) return e;
        e = e.factory(() => Qn);
        for (let r = 0; r < t.length; r++) n(e, t[r]);
        return e;
        function n(e, t) {
          for (let n = t + 1; n < e.nodes.length; n++) {
            const t = e.nodes[n];
            if (1 & t.flags) return;
            if (3840 & t.flags) {
              const e = t.provider,
                n = Bi.get(e.token);
              n &&
                ((t.flags = (-3841 & t.flags) | n.flags),
                (e.deps = mr(n.deps)),
                (e.value = n.value));
            }
          }
        }
      }
      function Ji(e, t, n, r, s, l, i, o, a, u, c, h, d) {
        const p = e.def.nodes[t];
        return (
          Ei(e, p, n, r, s, l, i, o, a, u, c, h, d),
          224 & p.flags ? Gn(e, t).value : void 0
        );
      }
      function Yi(e, t, n, r, s, l, i, o, a, u, c, h, d) {
        const p = e.def.nodes[t];
        return (
          Ai(e, p, n, r, s, l, i, o, a, u, c, h, d),
          224 & p.flags ? Gn(e, t).value : void 0
        );
      }
      function Xi(e) {
        return yo(no.detectChanges, ki, null, [e]);
      }
      function eo(e) {
        return yo(no.checkNoChanges, Si, null, [e]);
      }
      function to(e) {
        return yo(no.destroy, Oi, null, [e]);
      }
      const no = (function() {
        var e = {
          create: 0,
          detectChanges: 1,
          checkNoChanges: 2,
          destroy: 3,
          handleEvent: 4,
        };
        return (
          (e[e.create] = 'create'),
          (e[e.detectChanges] = 'detectChanges'),
          (e[e.checkNoChanges] = 'checkNoChanges'),
          (e[e.destroy] = 'destroy'),
          (e[e.handleEvent] = 'handleEvent'),
          e
        );
      })();
      let ro, so, lo;
      function io(e, t) {
        (so = e), (lo = t);
      }
      function oo(e, t, n, r) {
        return (
          io(e, t), yo(no.handleEvent, e.def.handleEvent, null, [e, t, n, r])
        );
      }
      function ao(e, t) {
        if (128 & e.state) throw jn(no[ro]);
        return (
          io(e, po(e, 0)),
          e.def.updateDirectives(function(e, n, r, ...s) {
            const l = e.def.nodes[n];
            return (
              0 === t ? co(e, l, r, s) : ho(e, l, r, s),
              16384 & l.flags && io(e, po(e, n)),
              224 & l.flags ? Gn(e, l.nodeIndex).value : void 0
            );
          }, e)
        );
      }
      function uo(e, t) {
        if (128 & e.state) throw jn(no[ro]);
        return (
          io(e, go(e, 0)),
          e.def.updateRenderer(function(e, n, r, ...s) {
            const l = e.def.nodes[n];
            return (
              0 === t ? co(e, l, r, s) : ho(e, l, r, s),
              3 & l.flags && io(e, go(e, n)),
              224 & l.flags ? Gn(e, l.nodeIndex).value : void 0
            );
          }, e)
        );
      }
      function co(e, t, n, r) {
        if (Ei(e, t, n, ...r)) {
          const i = 1 === n ? r[0] : r;
          if (16384 & t.flags) {
            const n = {};
            for (let e = 0; e < t.bindings.length; e++) {
              const r = t.bindings[e],
                o = i[e];
              8 & r.flags &&
                (n[
                  ((s = r.nonMinifiedName),
                  (l = void 0),
                  (l = s.replace(/[$@]/g, '_')),
                  `ng-reflect-${(s = l.replace(
                    At,
                    (...e) => '-' + e[1].toLowerCase()
                  ))}`)
                ] = Nt(o));
            }
            const r = t.parent,
              o = Bn(e, r.nodeIndex).renderElement;
            if (r.element.name)
              for (let t in n) {
                const r = n[t];
                null != r
                  ? e.renderer.setAttribute(o, t, r)
                  : e.renderer.removeAttribute(o, t);
              }
            else
              e.renderer.setValue(o, `bindings=${JSON.stringify(n, null, 2)}`);
          }
        }
        var s, l;
      }
      function ho(e, t, n, r) {
        Ai(e, t, n, ...r);
      }
      function po(e, t) {
        for (let n = t; n < e.def.nodes.length; n++) {
          const t = e.def.nodes[n];
          if (16384 & t.flags && t.bindings && t.bindings.length) return n;
        }
        return null;
      }
      function go(e, t) {
        for (let n = t; n < e.def.nodes.length; n++) {
          const t = e.def.nodes[n];
          if (3 & t.flags && t.bindings && t.bindings.length) return n;
        }
        return null;
      }
      class fo {
        constructor(e, t) {
          (this.view = e),
            (this.nodeIndex = t),
            null == t && (this.nodeIndex = t = 0),
            (this.nodeDef = e.def.nodes[t]);
          let n = this.nodeDef,
            r = e;
          for (; n && 0 == (1 & n.flags); ) n = n.parent;
          if (!n) for (; !n && r; ) (n = cr(r)), (r = r.parent);
          (this.elDef = n), (this.elView = r);
        }
        get elOrCompView() {
          return (
            Bn(this.elView, this.elDef.nodeIndex).componentView || this.view
          );
        }
        get injector() {
          return Zr(this.elView, this.elDef);
        }
        get component() {
          return this.elOrCompView.component;
        }
        get context() {
          return this.elOrCompView.context;
        }
        get providerTokens() {
          const e = [];
          if (this.elDef)
            for (
              let t = this.elDef.nodeIndex + 1;
              t <= this.elDef.nodeIndex + this.elDef.childCount;
              t++
            ) {
              const n = this.elView.def.nodes[t];
              20224 & n.flags && e.push(n.provider.token), (t += n.childCount);
            }
          return e;
        }
        get references() {
          const e = {};
          if (this.elDef) {
            mo(this.elView, this.elDef, e);
            for (
              let t = this.elDef.nodeIndex + 1;
              t <= this.elDef.nodeIndex + this.elDef.childCount;
              t++
            ) {
              const n = this.elView.def.nodes[t];
              20224 & n.flags && mo(this.elView, n, e), (t += n.childCount);
            }
          }
          return e;
        }
        get componentRenderElement() {
          const e = (function(e) {
            for (; e && !dr(e); ) e = e.parent;
            return e.parent ? Bn(e.parent, cr(e).nodeIndex) : null;
          })(this.elOrCompView);
          return e ? e.renderElement : void 0;
        }
        get renderNode() {
          return 2 & this.nodeDef.flags
            ? hr(this.view, this.nodeDef)
            : hr(this.elView, this.elDef);
        }
        logError(e, ...t) {
          let n, r;
          2 & this.nodeDef.flags
            ? ((n = this.view.def), (r = this.nodeDef.nodeIndex))
            : ((n = this.elView.def), (r = this.elDef.nodeIndex));
          const s = (function(e, t) {
            let n = -1;
            for (let r = 0; r <= t; r++) 3 & e.nodes[r].flags && n++;
            return n;
          })(n, r);
          let l = -1;
          n.factory(() => (++l === s ? e.error.bind(e, ...t) : Qn)),
            l < s &&
              (e.error(
                'Illegal state: the ViewDefinitionFactory did not call the logger!'
              ),
              e.error(...t));
        }
      }
      function mo(e, t, n) {
        for (let r in t.references) n[r] = oi(e, t, t.references[r]);
      }
      function yo(e, t, n, r) {
        const s = ro,
          l = so,
          i = lo;
        try {
          ro = e;
          const o = t.apply(n, r);
          return (so = l), (lo = i), (ro = s), o;
        } catch (u) {
          if (Ke(u) || !so) throw u;
          throw ((o = u),
          (a = vo()),
          o instanceof Error || (o = new Error(o.toString())),
          Fn(o, a),
          o);
        }
        var o, a;
      }
      function vo() {
        return so ? new fo(so, lo) : null;
      }
      class bo {
        constructor(e) {
          this.delegate = e;
        }
        createRenderer(e, t) {
          return new _o(this.delegate.createRenderer(e, t));
        }
        begin() {
          this.delegate.begin && this.delegate.begin();
        }
        end() {
          this.delegate.end && this.delegate.end();
        }
        whenRenderingDone() {
          return this.delegate.whenRenderingDone
            ? this.delegate.whenRenderingDone()
            : Promise.resolve(null);
        }
      }
      class _o {
        constructor(e) {
          (this.delegate = e),
            (this.debugContextFactory = vo),
            (this.data = this.delegate.data);
        }
        createDebugContext(e) {
          return this.debugContextFactory(e);
        }
        destroyNode(e) {
          const t = zl(e);
          !(function(e) {
            Hl.delete(e.nativeNode);
          })(t),
            t instanceof jl && (t.listeners.length = 0),
            this.delegate.destroyNode && this.delegate.destroyNode(e);
        }
        destroy() {
          this.delegate.destroy();
        }
        createElement(e, t) {
          const n = this.delegate.createElement(e, t),
            r = this.createDebugContext(n);
          if (r) {
            const t = new $l(n, null, r);
            (t.name = e), Bl(t);
          }
          return n;
        }
        createComment(e) {
          const t = this.delegate.createComment(e),
            n = this.createDebugContext(t);
          return n && Bl(new jl(t, null, n)), t;
        }
        createText(e) {
          const t = this.delegate.createText(e),
            n = this.createDebugContext(t);
          return n && Bl(new jl(t, null, n)), t;
        }
        appendChild(e, t) {
          const n = zl(e),
            r = zl(t);
          n && r && n instanceof $l && n.addChild(r),
            this.delegate.appendChild(e, t);
        }
        insertBefore(e, t, n) {
          const r = zl(e),
            s = zl(t),
            l = zl(n);
          r && s && r instanceof $l && r.insertBefore(l, s),
            this.delegate.insertBefore(e, t, n);
        }
        removeChild(e, t) {
          const n = zl(e),
            r = zl(t);
          n && r && n instanceof $l && n.removeChild(r),
            this.delegate.removeChild(e, t);
        }
        selectRootElement(e, t) {
          const n = this.delegate.selectRootElement(e, t),
            r = vo();
          return r && Bl(new $l(n, null, r)), n;
        }
        setAttribute(e, t, n, r) {
          const s = zl(e);
          s && s instanceof $l && (s.attributes[r ? r + ':' + t : t] = n),
            this.delegate.setAttribute(e, t, n, r);
        }
        removeAttribute(e, t, n) {
          const r = zl(e);
          r && r instanceof $l && (r.attributes[n ? n + ':' + t : t] = null),
            this.delegate.removeAttribute(e, t, n);
        }
        addClass(e, t) {
          const n = zl(e);
          n && n instanceof $l && (n.classes[t] = !0),
            this.delegate.addClass(e, t);
        }
        removeClass(e, t) {
          const n = zl(e);
          n && n instanceof $l && (n.classes[t] = !1),
            this.delegate.removeClass(e, t);
        }
        setStyle(e, t, n, r) {
          const s = zl(e);
          s && s instanceof $l && (s.styles[t] = n),
            this.delegate.setStyle(e, t, n, r);
        }
        removeStyle(e, t, n) {
          const r = zl(e);
          r && r instanceof $l && (r.styles[t] = null),
            this.delegate.removeStyle(e, t, n);
        }
        setProperty(e, t, n) {
          const r = zl(e);
          r && r instanceof $l && (r.properties[t] = n),
            this.delegate.setProperty(e, t, n);
        }
        listen(e, t, n) {
          if ('string' != typeof e) {
            const r = zl(e);
            r && r.listeners.push(new Fl(t, n));
          }
          return this.delegate.listen(e, t, n);
        }
        parentNode(e) {
          return this.delegate.parentNode(e);
        }
        nextSibling(e) {
          return this.delegate.nextSibling(e);
        }
        setValue(e, t) {
          return this.delegate.setValue(e, t);
        }
      }
      function wo(e, t, n) {
        return new Co(e, t, n);
      }
      class Co extends He {
        constructor(e, t, n) {
          super(),
            (this.moduleType = e),
            (this._bootstrapComponents = t),
            (this._ngModuleDefFactory = n);
        }
        create(e) {
          !(function() {
            if (Li) return;
            Li = !0;
            const e = nt()
              ? {
                  setCurrentNode: io,
                  createRootView: Fi,
                  createEmbeddedView: $i,
                  createComponentView: Hi,
                  createNgModuleRef: zi,
                  overrideProvider: Wi,
                  overrideComponentView: Zi,
                  clearOverrides: Qi,
                  checkAndUpdateView: Xi,
                  checkNoChangesView: eo,
                  destroyView: to,
                  createDebugContext: (e, t) => new fo(e, t),
                  handleEvent: oo,
                  updateDirectives: ao,
                  updateRenderer: uo,
                }
              : {
                  setCurrentNode: () => {},
                  createRootView: Ui,
                  createEmbeddedView: vi,
                  createComponentView: _i,
                  createNgModuleRef: Xr,
                  overrideProvider: Qn,
                  overrideComponentView: Qn,
                  clearOverrides: Qn,
                  checkAndUpdateView: ki,
                  checkNoChangesView: Si,
                  destroyView: Oi,
                  createDebugContext: (e, t) => new fo(e, t),
                  handleEvent: (e, t, n, r) => e.def.handleEvent(e, t, n, r),
                  updateDirectives: (e, t) =>
                    e.def.updateDirectives(0 === t ? Ji : Yi, e),
                  updateRenderer: (e, t) =>
                    e.def.updateRenderer(0 === t ? Ji : Yi, e),
                };
            (Zn.setCurrentNode = e.setCurrentNode),
              (Zn.createRootView = e.createRootView),
              (Zn.createEmbeddedView = e.createEmbeddedView),
              (Zn.createComponentView = e.createComponentView),
              (Zn.createNgModuleRef = e.createNgModuleRef),
              (Zn.overrideProvider = e.overrideProvider),
              (Zn.overrideComponentView = e.overrideComponentView),
              (Zn.clearOverrides = e.clearOverrides),
              (Zn.checkAndUpdateView = e.checkAndUpdateView),
              (Zn.checkNoChangesView = e.checkNoChangesView),
              (Zn.destroyView = e.destroyView),
              (Zn.resolveDep = _s),
              (Zn.createDebugContext = e.createDebugContext),
              (Zn.handleEvent = e.handleEvent),
              (Zn.updateDirectives = e.updateDirectives),
              (Zn.updateRenderer = e.updateRenderer),
              (Zn.dirtyParentQueries = si);
          })();
          const t = (function(e) {
            const t = Array.from(e.providers),
              n = Array.from(e.modules),
              r = {};
            for (const s in e.providersByKey) r[s] = e.providersByKey[s];
            return {
              factory: e.factory,
              isRoot: e.isRoot,
              providers: t,
              modules: n,
              providersByKey: r,
            };
          })(br(this._ngModuleDefFactory));
          return Zn.createNgModuleRef(
            this.moduleType,
            e || Dt.NULL,
            this._bootstrapComponents,
            t
          );
        }
      }
      class xo {}
      class So {
        constructor() {
          this.title = 'learning-angular';
        }
      }
      class ko {}
      const Eo = new ke('Location Initialized');
      class To {}
      const Ao = new ke('appBaseHref');
      class No {
        constructor(e, t) {
          (this._subject = new Ds()),
            (this._urlChangeListeners = []),
            (this._platformStrategy = e);
          const n = this._platformStrategy.getBaseHref();
          (this._platformLocation = t),
            (this._baseHref = No.stripTrailingSlash(Oo(n))),
            this._platformStrategy.onPopState(e => {
              this._subject.emit({
                url: this.path(!0),
                pop: !0,
                state: e.state,
                type: e.type,
              });
            });
        }
        path(e = !1) {
          return this.normalize(this._platformStrategy.path(e));
        }
        getState() {
          return this._platformLocation.getState();
        }
        isCurrentPathEqualTo(e, t = '') {
          return this.path() == this.normalize(e + No.normalizeQueryParams(t));
        }
        normalize(e) {
          return No.stripTrailingSlash(
            (function(e, t) {
              return e && t.startsWith(e) ? t.substring(e.length) : t;
            })(this._baseHref, Oo(e))
          );
        }
        prepareExternalUrl(e) {
          return (
            e && '/' !== e[0] && (e = '/' + e),
            this._platformStrategy.prepareExternalUrl(e)
          );
        }
        go(e, t = '', n = null) {
          this._platformStrategy.pushState(n, '', e, t),
            this._notifyUrlChangeListeners(
              this.prepareExternalUrl(e + No.normalizeQueryParams(t)),
              n
            );
        }
        replaceState(e, t = '', n = null) {
          this._platformStrategy.replaceState(n, '', e, t),
            this._notifyUrlChangeListeners(
              this.prepareExternalUrl(e + No.normalizeQueryParams(t)),
              n
            );
        }
        forward() {
          this._platformStrategy.forward();
        }
        back() {
          this._platformStrategy.back();
        }
        onUrlChange(e) {
          this._urlChangeListeners.push(e),
            this.subscribe(e => {
              this._notifyUrlChangeListeners(e.url, e.state);
            });
        }
        _notifyUrlChangeListeners(e = '', t) {
          this._urlChangeListeners.forEach(n => n(e, t));
        }
        subscribe(e, t, n) {
          return this._subject.subscribe({ next: e, error: t, complete: n });
        }
        static normalizeQueryParams(e) {
          return e && '?' !== e[0] ? '?' + e : e;
        }
        static joinWithSlash(e, t) {
          if (0 == e.length) return t;
          if (0 == t.length) return e;
          let n = 0;
          return (
            e.endsWith('/') && n++,
            t.startsWith('/') && n++,
            2 == n ? e + t.substring(1) : 1 == n ? e + t : e + '/' + t
          );
        }
        static stripTrailingSlash(e) {
          const t = e.match(/#|\?|$/),
            n = (t && t.index) || e.length;
          return e.slice(0, n - ('/' === e[n - 1] ? 1 : 0)) + e.slice(n);
        }
      }
      function Oo(e) {
        return e.replace(/\/index.html$/, '');
      }
      class Io extends To {
        constructor(e, t) {
          super(),
            (this._platformLocation = e),
            (this._baseHref = ''),
            null != t && (this._baseHref = t);
        }
        onPopState(e) {
          this._platformLocation.onPopState(e),
            this._platformLocation.onHashChange(e);
        }
        getBaseHref() {
          return this._baseHref;
        }
        path(e = !1) {
          let t = this._platformLocation.hash;
          return null == t && (t = '#'), t.length > 0 ? t.substring(1) : t;
        }
        prepareExternalUrl(e) {
          const t = No.joinWithSlash(this._baseHref, e);
          return t.length > 0 ? '#' + t : t;
        }
        pushState(e, t, n, r) {
          let s = this.prepareExternalUrl(n + No.normalizeQueryParams(r));
          0 == s.length && (s = this._platformLocation.pathname),
            this._platformLocation.pushState(e, t, s);
        }
        replaceState(e, t, n, r) {
          let s = this.prepareExternalUrl(n + No.normalizeQueryParams(r));
          0 == s.length && (s = this._platformLocation.pathname),
            this._platformLocation.replaceState(e, t, s);
        }
        forward() {
          this._platformLocation.forward();
        }
        back() {
          this._platformLocation.back();
        }
      }
      class Ro extends To {
        constructor(e, t) {
          if (
            (super(),
            (this._platformLocation = e),
            null == t && (t = this._platformLocation.getBaseHrefFromDOM()),
            null == t)
          )
            throw new Error(
              'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.'
            );
          this._baseHref = t;
        }
        onPopState(e) {
          this._platformLocation.onPopState(e),
            this._platformLocation.onHashChange(e);
        }
        getBaseHref() {
          return this._baseHref;
        }
        prepareExternalUrl(e) {
          return No.joinWithSlash(this._baseHref, e);
        }
        path(e = !1) {
          const t =
              this._platformLocation.pathname +
              No.normalizeQueryParams(this._platformLocation.search),
            n = this._platformLocation.hash;
          return n && e ? `${t}${n}` : t;
        }
        pushState(e, t, n, r) {
          const s = this.prepareExternalUrl(n + No.normalizeQueryParams(r));
          this._platformLocation.pushState(e, t, s);
        }
        replaceState(e, t, n, r) {
          const s = this.prepareExternalUrl(n + No.normalizeQueryParams(r));
          this._platformLocation.replaceState(e, t, s);
        }
        forward() {
          this._platformLocation.forward();
        }
        back() {
          this._platformLocation.back();
        }
      }
      const Po = (function() {
          var e = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 };
          return (
            (e[e.Zero] = 'Zero'),
            (e[e.One] = 'One'),
            (e[e.Two] = 'Two'),
            (e[e.Few] = 'Few'),
            (e[e.Many] = 'Many'),
            (e[e.Other] = 'Other'),
            e
          );
        })(),
        Do = function(e) {
          return (function(e) {
            const t = e.toLowerCase().replace(/_/g, '-');
            let n = Ts[t];
            if (n) return n;
            const r = t.split('-')[0];
            if ((n = Ts[r])) return n;
            if ('en' === r) return Os;
            throw new Error(`Missing locale data for the locale "${e}".`);
          })(e)[As.PluralCase];
        },
        Vo = new ke('UseV4Plurals');
      class Mo {}
      class Lo extends Mo {
        constructor(e, t) {
          super(), (this.locale = e), (this.deprecatedPluralFn = t);
        }
        getPluralCategory(e, t) {
          switch (
            this.deprecatedPluralFn
              ? this.deprecatedPluralFn(t || this.locale, e)
              : Do(t || this.locale)(e)
          ) {
            case Po.Zero:
              return 'zero';
            case Po.One:
              return 'one';
            case Po.Two:
              return 'two';
            case Po.Few:
              return 'few';
            case Po.Many:
              return 'many';
            default:
              return 'other';
          }
        }
      }
      function Uo(e, t) {
        t = encodeURIComponent(t);
        for (const n of e.split(';')) {
          const e = n.indexOf('='),
            [r, s] = -1 == e ? [n, ''] : [n.slice(0, e), n.slice(e + 1)];
          if (r.trim() === t) return decodeURIComponent(s);
        }
        return null;
      }
      class Fo {
        constructor(e, t, n, r) {
          (this.$implicit = e),
            (this.ngForOf = t),
            (this.index = n),
            (this.count = r);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      class jo {
        constructor(e, t, n) {
          (this._viewContainer = e),
            (this._template = t),
            (this._differs = n),
            (this._ngForOfDirty = !0),
            (this._differ = null);
        }
        set ngForOf(e) {
          (this._ngForOf = e), (this._ngForOfDirty = !0);
        }
        set ngForTrackBy(e) {
          nt() &&
            null != e &&
            'function' != typeof e &&
            console &&
            console.warn &&
            console.warn(
              `trackBy must be a function, but received ${JSON.stringify(
                e
              )}. ` +
                'See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information.'
            ),
            (this._trackByFn = e);
        }
        get ngForTrackBy() {
          return this._trackByFn;
        }
        set ngForTemplate(e) {
          e && (this._template = e);
        }
        ngDoCheck() {
          if (this._ngForOfDirty) {
            this._ngForOfDirty = !1;
            const n = this._ngForOf;
            if (!this._differ && n)
              try {
                this._differ = this._differs.find(n).create(this.ngForTrackBy);
              } catch (t) {
                throw new Error(
                  `Cannot find a differ supporting object '${n}' of type '${((e = n),
                  e.name ||
                    typeof e)}'. NgFor only supports binding to Iterables such as Arrays.`
                );
              }
          }
          var e;
          if (this._differ) {
            const e = this._differ.diff(this._ngForOf);
            e && this._applyChanges(e);
          }
        }
        _applyChanges(e) {
          const t = [];
          e.forEachOperation((e, n, r) => {
            if (null == e.previousIndex) {
              const n = this._viewContainer.createEmbeddedView(
                  this._template,
                  new Fo(null, this._ngForOf, -1, -1),
                  null === r ? void 0 : r
                ),
                s = new $o(e, n);
              t.push(s);
            } else if (null == r)
              this._viewContainer.remove(null === n ? void 0 : n);
            else if (null !== n) {
              const s = this._viewContainer.get(n);
              this._viewContainer.move(s, r);
              const l = new $o(e, s);
              t.push(l);
            }
          });
          for (let n = 0; n < t.length; n++)
            this._perViewChange(t[n].view, t[n].record);
          for (let n = 0, r = this._viewContainer.length; n < r; n++) {
            const e = this._viewContainer.get(n);
            (e.context.index = n),
              (e.context.count = r),
              (e.context.ngForOf = this._ngForOf);
          }
          e.forEachIdentityChange(e => {
            this._viewContainer.get(e.currentIndex).context.$implicit = e.item;
          });
        }
        _perViewChange(e, t) {
          e.context.$implicit = t.item;
        }
        static ngTemplateContextGuard(e, t) {
          return !0;
        }
      }
      class $o {
        constructor(e, t) {
          (this.record = e), (this.view = t);
        }
      }
      class Ho {}
      const zo = new ke('DocumentToken'),
        Bo = 'browser',
        qo = 'server';
      function Go(e) {
        return e === Bo;
      }
      let Wo = (() => {
        class e {}
        return (
          (e.ngInjectableDef = pe({
            token: e,
            providedIn: 'root',
            factory: () => new Zo(Ue(zo), window, Ue(Xe)),
          })),
          e
        );
      })();
      class Zo {
        constructor(e, t, n) {
          (this.document = e),
            (this.window = t),
            (this.errorHandler = n),
            (this.offset = () => [0, 0]);
        }
        setOffset(e) {
          this.offset = Array.isArray(e) ? () => e : e;
        }
        getScrollPosition() {
          return this.supportScrollRestoration()
            ? [this.window.scrollX, this.window.scrollY]
            : [0, 0];
        }
        scrollToPosition(e) {
          this.supportScrollRestoration() && this.window.scrollTo(e[0], e[1]);
        }
        scrollToAnchor(e) {
          if (this.supportScrollRestoration()) {
            e =
              this.window.CSS && this.window.CSS.escape
                ? this.window.CSS.escape(e)
                : e.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
            try {
              const t = this.document.querySelector(`#${e}`);
              if (t) return void this.scrollToElement(t);
              const n = this.document.querySelector(`[name='${e}']`);
              if (n) return void this.scrollToElement(n);
            } catch (t) {
              this.errorHandler.handleError(t);
            }
          }
        }
        setHistoryScrollRestoration(e) {
          if (this.supportScrollRestoration()) {
            const t = this.window.history;
            t && t.scrollRestoration && (t.scrollRestoration = e);
          }
        }
        scrollToElement(e) {
          const t = e.getBoundingClientRect(),
            n = t.left + this.window.pageXOffset,
            r = t.top + this.window.pageYOffset,
            s = this.offset();
          this.window.scrollTo(n - s[0], r - s[1]);
        }
        supportScrollRestoration() {
          try {
            return !!this.window && !!this.window.scrollTo;
          } catch (e) {
            return !1;
          }
        }
      }
      const Qo = new w(e => e.complete());
      function Ko(e) {
        return e
          ? (function(e) {
              return new w(t => e.schedule(() => t.complete()));
            })(e)
          : Qo;
      }
      function Jo(e) {
        const t = new w(t => {
          t.next(e), t.complete();
        });
        return (t._isScalar = !0), (t.value = e), t;
      }
      function Yo(...e) {
        let t = e[e.length - 1];
        switch ((N(t) ? e.pop() : (t = void 0), e.length)) {
          case 0:
            return Ko(t);
          case 1:
            return t ? q(e, t) : Jo(e[0]);
          default:
            return q(e, t);
        }
      }
      class Xo extends T {
        constructor(e) {
          super(), (this._value = e);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(e) {
          const t = super._subscribe(e);
          return t && !t.closed && e.next(this._value), t;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new S();
          return this._value;
        }
        next(e) {
          super.next((this._value = e));
        }
      }
      function ea() {
        return (
          Error.call(this),
          (this.message = 'no elements in sequence'),
          (this.name = 'EmptyError'),
          this
        );
      }
      ea.prototype = Object.create(Error.prototype);
      const ta = ea,
        na = {};
      class ra {
        constructor(e) {
          this.resultSelector = e;
        }
        call(e, t) {
          return t.subscribe(new sa(e, this.resultSelector));
        }
      }
      class sa extends $ {
        constructor(e, t) {
          super(e),
            (this.resultSelector = t),
            (this.active = 0),
            (this.values = []),
            (this.observables = []);
        }
        _next(e) {
          this.values.push(na), this.observables.push(e);
        }
        _complete() {
          const e = this.observables,
            t = e.length;
          if (0 === t) this.destination.complete();
          else {
            (this.active = t), (this.toRespond = t);
            for (let n = 0; n < t; n++) {
              const t = e[n];
              this.add(j(this, t, t, n));
            }
          }
        }
        notifyComplete(e) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(e, t, n, r, s) {
          const l = this.values,
            i = this.toRespond
              ? l[n] === na
                ? --this.toRespond
                : this.toRespond
              : 0;
          (l[n] = t),
            0 === i &&
              (this.resultSelector
                ? this._tryResultSelector(l)
                : this.destination.next(l.slice()));
        }
        _tryResultSelector(e) {
          let t;
          try {
            t = this.resultSelector.apply(this, e);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(t);
        }
      }
      function la(e) {
        return new w(t => {
          let n;
          try {
            n = e();
          } catch (r) {
            return void t.error(r);
          }
          return (n ? G(n) : Ko()).subscribe(t);
        });
      }
      function ia() {
        return J(1);
      }
      function oa(e, t) {
        return function(n) {
          return n.lift(new aa(e, t));
        };
      }
      class aa {
        constructor(e, t) {
          (this.predicate = e), (this.thisArg = t);
        }
        call(e, t) {
          return t.subscribe(new ua(e, this.predicate, this.thisArg));
        }
      }
      class ua extends f {
        constructor(e, t, n) {
          super(e), (this.predicate = t), (this.thisArg = n), (this.count = 0);
        }
        _next(e) {
          let t;
          try {
            t = this.predicate.call(this.thisArg, e, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          t && this.destination.next(e);
        }
      }
      function ca() {
        return (
          Error.call(this),
          (this.message = 'argument out of range'),
          (this.name = 'ArgumentOutOfRangeError'),
          this
        );
      }
      ca.prototype = Object.create(Error.prototype);
      const ha = ca;
      function da(e) {
        return function(t) {
          return 0 === e ? Ko() : t.lift(new pa(e));
        };
      }
      class pa {
        constructor(e) {
          if (((this.total = e), this.total < 0)) throw new ha();
        }
        call(e, t) {
          return t.subscribe(new ga(e, this.total));
        }
      }
      class ga extends f {
        constructor(e, t) {
          super(e),
            (this.total = t),
            (this.ring = new Array()),
            (this.count = 0);
        }
        _next(e) {
          const t = this.ring,
            n = this.total,
            r = this.count++;
          t.length < n ? t.push(e) : (t[r % n] = e);
        }
        _complete() {
          const e = this.destination;
          let t = this.count;
          if (t > 0) {
            const n = this.count >= this.total ? this.total : this.count,
              r = this.ring;
            for (let s = 0; s < n; s++) {
              const s = t++ % n;
              e.next(r[s]);
            }
          }
          e.complete();
        }
      }
      function fa(e, t, n) {
        return function(r) {
          return r.lift(new ma(e, t, n));
        };
      }
      class ma {
        constructor(e, t, n) {
          (this.nextOrObserver = e), (this.error = t), (this.complete = n);
        }
        call(e, t) {
          return t.subscribe(
            new ya(e, this.nextOrObserver, this.error, this.complete)
          );
        }
      }
      class ya extends f {
        constructor(e, t, n, s) {
          super(e),
            (this._tapNext = v),
            (this._tapError = v),
            (this._tapComplete = v),
            (this._tapError = n || v),
            (this._tapComplete = s || v),
            r(t)
              ? ((this._context = this), (this._tapNext = t))
              : t &&
                ((this._context = t),
                (this._tapNext = t.next || v),
                (this._tapError = t.error || v),
                (this._tapComplete = t.complete || v));
        }
        _next(e) {
          try {
            this._tapNext.call(this._context, e);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.next(e);
        }
        _error(e) {
          try {
            this._tapError.call(this._context, e);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.error(e);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (e) {
            return void this.destination.error(e);
          }
          return this.destination.complete();
        }
      }
      const va = (e = ba) =>
        fa({
          hasValue: !1,
          next() {
            this.hasValue = !0;
          },
          complete() {
            if (!this.hasValue) throw e();
          },
        });
      function ba() {
        return new ta();
      }
      function _a(e = null) {
        return t => t.lift(new wa(e));
      }
      class wa {
        constructor(e) {
          this.defaultValue = e;
        }
        call(e, t) {
          return t.subscribe(new Ca(e, this.defaultValue));
        }
      }
      class Ca extends f {
        constructor(e, t) {
          super(e), (this.defaultValue = t), (this.isEmpty = !0);
        }
        _next(e) {
          (this.isEmpty = !1), this.destination.next(e);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue),
            this.destination.complete();
        }
      }
      function xa(e, t) {
        const n = arguments.length >= 2;
        return r =>
          r.pipe(
            e ? oa((t, n) => e(t, n, r)) : K,
            da(1),
            n ? _a(t) : va(() => new ta())
          );
      }
      function Sa(e) {
        return function(t) {
          const n = new ka(e),
            r = t.lift(n);
          return (n.caught = r);
        };
      }
      class ka {
        constructor(e) {
          this.selector = e;
        }
        call(e, t) {
          return t.subscribe(new Ea(e, this.selector, this.caught));
        }
      }
      class Ea extends $ {
        constructor(e, t, n) {
          super(e), (this.selector = t), (this.caught = n);
        }
        error(e) {
          if (!this.isStopped) {
            let n;
            try {
              n = this.selector(e, this.caught);
            } catch (t) {
              return void super.error(t);
            }
            this._unsubscribeAndRecycle();
            const r = new O(this, void 0, void 0);
            this.add(r), j(this, n, void 0, void 0, r);
          }
        }
      }
      function Ta(e) {
        return t => (0 === e ? Ko() : t.lift(new Aa(e)));
      }
      class Aa {
        constructor(e) {
          if (((this.total = e), this.total < 0)) throw new ha();
        }
        call(e, t) {
          return t.subscribe(new Na(e, this.total));
        }
      }
      class Na extends f {
        constructor(e, t) {
          super(e), (this.total = t), (this.count = 0);
        }
        _next(e) {
          const t = this.total,
            n = ++this.count;
          n <= t &&
            (this.destination.next(e),
            n === t && (this.destination.complete(), this.unsubscribe()));
        }
      }
      function Oa(e, t) {
        const n = arguments.length >= 2;
        return r =>
          r.pipe(
            e ? oa((t, n) => e(t, n, r)) : K,
            Ta(1),
            n ? _a(t) : va(() => new ta())
          );
      }
      class Ia {
        constructor(e, t, n) {
          (this.predicate = e), (this.thisArg = t), (this.source = n);
        }
        call(e, t) {
          return t.subscribe(
            new Ra(e, this.predicate, this.thisArg, this.source)
          );
        }
      }
      class Ra extends f {
        constructor(e, t, n, r) {
          super(e),
            (this.predicate = t),
            (this.thisArg = n),
            (this.source = r),
            (this.index = 0),
            (this.thisArg = n || this);
        }
        notifyComplete(e) {
          this.destination.next(e), this.destination.complete();
        }
        _next(e) {
          let t = !1;
          try {
            t = this.predicate.call(this.thisArg, e, this.index++, this.source);
          } catch (n) {
            return void this.destination.error(n);
          }
          t || this.notifyComplete(!1);
        }
        _complete() {
          this.notifyComplete(!0);
        }
      }
      function Pa(e, t) {
        return 'function' == typeof t
          ? n =>
              n.pipe(Pa((n, r) => G(e(n, r)).pipe(H((e, s) => t(n, e, r, s)))))
          : t => t.lift(new Da(e));
      }
      class Da {
        constructor(e) {
          this.project = e;
        }
        call(e, t) {
          return t.subscribe(new Va(e, this.project));
        }
      }
      class Va extends $ {
        constructor(e, t) {
          super(e), (this.project = t), (this.index = 0);
        }
        _next(e) {
          let t;
          const n = this.index++;
          try {
            t = this.project(e, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this._innerSub(t, e, n);
        }
        _innerSub(e, t, n) {
          const r = this.innerSubscription;
          r && r.unsubscribe();
          const s = new O(this, void 0, void 0);
          this.destination.add(s),
            (this.innerSubscription = j(this, e, t, n, s));
        }
        _complete() {
          const { innerSubscription: e } = this;
          (e && !e.closed) || super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = null;
        }
        notifyComplete(e) {
          this.destination.remove(e),
            (this.innerSubscription = null),
            this.isStopped && super._complete();
        }
        notifyNext(e, t, n, r, s) {
          this.destination.next(t);
        }
      }
      function Ma(e, t) {
        let n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function(r) {
            return r.lift(new La(e, t, n));
          }
        );
      }
      class La {
        constructor(e, t, n = !1) {
          (this.accumulator = e), (this.seed = t), (this.hasSeed = n);
        }
        call(e, t) {
          return t.subscribe(
            new Ua(e, this.accumulator, this.seed, this.hasSeed)
          );
        }
      }
      class Ua extends f {
        constructor(e, t, n, r) {
          super(e),
            (this.accumulator = t),
            (this._seed = n),
            (this.hasSeed = r),
            (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(e) {
          (this.hasSeed = !0), (this._seed = e);
        }
        _next(e) {
          if (this.hasSeed) return this._tryNext(e);
          (this.seed = e), this.destination.next(e);
        }
        _tryNext(e) {
          const t = this.index++;
          let n;
          try {
            n = this.accumulator(this.seed, e, t);
          } catch (r) {
            this.destination.error(r);
          }
          (this.seed = n), this.destination.next(n);
        }
      }
      function Fa(e, t) {
        return W(e, t, 1);
      }
      class ja {
        constructor(e) {
          this.callback = e;
        }
        call(e, t) {
          return t.subscribe(new $a(e, this.callback));
        }
      }
      class $a extends f {
        constructor(e, t) {
          super(e), this.add(new d(t));
        }
      }
      let Ha = null;
      function za() {
        return Ha;
      }
      class Ba {
        constructor() {
          this.resourceLoaderType = null;
        }
        get attrToPropMap() {
          return this._attrToPropMap;
        }
        set attrToPropMap(e) {
          this._attrToPropMap = e;
        }
      }
      class qa extends Ba {
        constructor() {
          super(), (this._animationPrefix = null), (this._transitionEnd = null);
          try {
            const e = this.createElement('div', document);
            if (null != this.getStyle(e, 'animationName'))
              this._animationPrefix = '';
            else {
              const t = ['Webkit', 'Moz', 'O', 'ms'];
              for (let n = 0; n < t.length; n++)
                if (null != this.getStyle(e, t[n] + 'AnimationName')) {
                  this._animationPrefix = '-' + t[n].toLowerCase() + '-';
                  break;
                }
            }
            const t = {
              WebkitTransition: 'webkitTransitionEnd',
              MozTransition: 'transitionend',
              OTransition: 'oTransitionEnd otransitionend',
              transition: 'transitionend',
            };
            Object.keys(t).forEach(n => {
              null != this.getStyle(e, n) && (this._transitionEnd = t[n]);
            });
          } catch (e) {
            (this._animationPrefix = null), (this._transitionEnd = null);
          }
        }
        getDistributedNodes(e) {
          return e.getDistributedNodes();
        }
        resolveAndSetHref(e, t, n) {
          e.href = null == n ? t : t + '/../' + n;
        }
        supportsDOMEvents() {
          return !0;
        }
        supportsNativeShadowDOM() {
          return 'function' == typeof document.body.createShadowRoot;
        }
        getAnimationPrefix() {
          return this._animationPrefix ? this._animationPrefix : '';
        }
        getTransitionEnd() {
          return this._transitionEnd ? this._transitionEnd : '';
        }
        supportsAnimation() {
          return null != this._animationPrefix && null != this._transitionEnd;
        }
      }
      const Ga = {
          class: 'className',
          innerHtml: 'innerHTML',
          readonly: 'readOnly',
          tabindex: 'tabIndex',
        },
        Wa = 3,
        Za = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS',
        },
        Qa = {
          A: '1',
          B: '2',
          C: '3',
          D: '4',
          E: '5',
          F: '6',
          G: '7',
          H: '8',
          I: '9',
          J: '*',
          K: '+',
          M: '-',
          N: '.',
          O: '/',
          '`': '0',
          '\x90': 'NumLock',
        },
        Ka = (() => {
          if (Se.Node)
            return (
              Se.Node.prototype.contains ||
              function(e) {
                return !!(16 & this.compareDocumentPosition(e));
              }
            );
        })();
      class Ja extends qa {
        parse(e) {
          throw new Error('parse not implemented');
        }
        static makeCurrent() {
          var e;
          (e = new Ja()), Ha || (Ha = e);
        }
        hasProperty(e, t) {
          return t in e;
        }
        setProperty(e, t, n) {
          e[t] = n;
        }
        getProperty(e, t) {
          return e[t];
        }
        invoke(e, t, n) {
          e[t](...n);
        }
        logError(e) {
          window.console && (console.error ? console.error(e) : console.log(e));
        }
        log(e) {
          window.console && window.console.log && window.console.log(e);
        }
        logGroup(e) {
          window.console && window.console.group && window.console.group(e);
        }
        logGroupEnd() {
          window.console &&
            window.console.groupEnd &&
            window.console.groupEnd();
        }
        get attrToPropMap() {
          return Ga;
        }
        contains(e, t) {
          return Ka.call(e, t);
        }
        querySelector(e, t) {
          return e.querySelector(t);
        }
        querySelectorAll(e, t) {
          return e.querySelectorAll(t);
        }
        on(e, t, n) {
          e.addEventListener(t, n, !1);
        }
        onAndCancel(e, t, n) {
          return (
            e.addEventListener(t, n, !1),
            () => {
              e.removeEventListener(t, n, !1);
            }
          );
        }
        dispatchEvent(e, t) {
          e.dispatchEvent(t);
        }
        createMouseEvent(e) {
          const t = this.getDefaultDocument().createEvent('MouseEvent');
          return t.initEvent(e, !0, !0), t;
        }
        createEvent(e) {
          const t = this.getDefaultDocument().createEvent('Event');
          return t.initEvent(e, !0, !0), t;
        }
        preventDefault(e) {
          e.preventDefault(), (e.returnValue = !1);
        }
        isPrevented(e) {
          return (
            e.defaultPrevented || (null != e.returnValue && !e.returnValue)
          );
        }
        getInnerHTML(e) {
          return e.innerHTML;
        }
        getTemplateContent(e) {
          return 'content' in e && this.isTemplateElement(e) ? e.content : null;
        }
        getOuterHTML(e) {
          return e.outerHTML;
        }
        nodeName(e) {
          return e.nodeName;
        }
        nodeValue(e) {
          return e.nodeValue;
        }
        type(e) {
          return e.type;
        }
        content(e) {
          return this.hasProperty(e, 'content') ? e.content : e;
        }
        firstChild(e) {
          return e.firstChild;
        }
        nextSibling(e) {
          return e.nextSibling;
        }
        parentElement(e) {
          return e.parentNode;
        }
        childNodes(e) {
          return e.childNodes;
        }
        childNodesAsList(e) {
          const t = e.childNodes,
            n = new Array(t.length);
          for (let r = 0; r < t.length; r++) n[r] = t[r];
          return n;
        }
        clearNodes(e) {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
        }
        appendChild(e, t) {
          e.appendChild(t);
        }
        removeChild(e, t) {
          e.removeChild(t);
        }
        replaceChild(e, t, n) {
          e.replaceChild(t, n);
        }
        remove(e) {
          return e.parentNode && e.parentNode.removeChild(e), e;
        }
        insertBefore(e, t, n) {
          e.insertBefore(n, t);
        }
        insertAllBefore(e, t, n) {
          n.forEach(n => e.insertBefore(n, t));
        }
        insertAfter(e, t, n) {
          e.insertBefore(n, t.nextSibling);
        }
        setInnerHTML(e, t) {
          e.innerHTML = t;
        }
        getText(e) {
          return e.textContent;
        }
        setText(e, t) {
          e.textContent = t;
        }
        getValue(e) {
          return e.value;
        }
        setValue(e, t) {
          e.value = t;
        }
        getChecked(e) {
          return e.checked;
        }
        setChecked(e, t) {
          e.checked = t;
        }
        createComment(e) {
          return this.getDefaultDocument().createComment(e);
        }
        createTemplate(e) {
          const t = this.getDefaultDocument().createElement('template');
          return (t.innerHTML = e), t;
        }
        createElement(e, t) {
          return (t = t || this.getDefaultDocument()).createElement(e);
        }
        createElementNS(e, t, n) {
          return (n = n || this.getDefaultDocument()).createElementNS(e, t);
        }
        createTextNode(e, t) {
          return (t = t || this.getDefaultDocument()).createTextNode(e);
        }
        createScriptTag(e, t, n) {
          const r = (n = n || this.getDefaultDocument()).createElement(
            'SCRIPT'
          );
          return r.setAttribute(e, t), r;
        }
        createStyleElement(e, t) {
          const n = (t = t || this.getDefaultDocument()).createElement('style');
          return this.appendChild(n, this.createTextNode(e, t)), n;
        }
        createShadowRoot(e) {
          return e.createShadowRoot();
        }
        getShadowRoot(e) {
          return e.shadowRoot;
        }
        getHost(e) {
          return e.host;
        }
        clone(e) {
          return e.cloneNode(!0);
        }
        getElementsByClassName(e, t) {
          return e.getElementsByClassName(t);
        }
        getElementsByTagName(e, t) {
          return e.getElementsByTagName(t);
        }
        classList(e) {
          return Array.prototype.slice.call(e.classList, 0);
        }
        addClass(e, t) {
          e.classList.add(t);
        }
        removeClass(e, t) {
          e.classList.remove(t);
        }
        hasClass(e, t) {
          return e.classList.contains(t);
        }
        setStyle(e, t, n) {
          e.style[t] = n;
        }
        removeStyle(e, t) {
          e.style[t] = '';
        }
        getStyle(e, t) {
          return e.style[t];
        }
        hasStyle(e, t, n) {
          const r = this.getStyle(e, t) || '';
          return n ? r == n : r.length > 0;
        }
        tagName(e) {
          return e.tagName;
        }
        attributeMap(e) {
          const t = new Map(),
            n = e.attributes;
          for (let r = 0; r < n.length; r++) {
            const e = n.item(r);
            t.set(e.name, e.value);
          }
          return t;
        }
        hasAttribute(e, t) {
          return e.hasAttribute(t);
        }
        hasAttributeNS(e, t, n) {
          return e.hasAttributeNS(t, n);
        }
        getAttribute(e, t) {
          return e.getAttribute(t);
        }
        getAttributeNS(e, t, n) {
          return e.getAttributeNS(t, n);
        }
        setAttribute(e, t, n) {
          e.setAttribute(t, n);
        }
        setAttributeNS(e, t, n, r) {
          e.setAttributeNS(t, n, r);
        }
        removeAttribute(e, t) {
          e.removeAttribute(t);
        }
        removeAttributeNS(e, t, n) {
          e.removeAttributeNS(t, n);
        }
        templateAwareRoot(e) {
          return this.isTemplateElement(e) ? this.content(e) : e;
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        getBoundingClientRect(e) {
          try {
            return e.getBoundingClientRect();
          } catch (t) {
            return {
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              width: 0,
              height: 0,
            };
          }
        }
        getTitle(e) {
          return e.title;
        }
        setTitle(e, t) {
          e.title = t || '';
        }
        elementMatches(e, t) {
          return (
            !!this.isElementNode(e) &&
            ((e.matches && e.matches(t)) ||
              (e.msMatchesSelector && e.msMatchesSelector(t)) ||
              (e.webkitMatchesSelector && e.webkitMatchesSelector(t)))
          );
        }
        isTemplateElement(e) {
          return this.isElementNode(e) && 'TEMPLATE' === e.nodeName;
        }
        isTextNode(e) {
          return e.nodeType === Node.TEXT_NODE;
        }
        isCommentNode(e) {
          return e.nodeType === Node.COMMENT_NODE;
        }
        isElementNode(e) {
          return e.nodeType === Node.ELEMENT_NODE;
        }
        hasShadowRoot(e) {
          return null != e.shadowRoot && e instanceof HTMLElement;
        }
        isShadowRoot(e) {
          return e instanceof DocumentFragment;
        }
        importIntoDoc(e) {
          return document.importNode(this.templateAwareRoot(e), !0);
        }
        adoptNode(e) {
          return document.adoptNode(e);
        }
        getHref(e) {
          return e.getAttribute('href');
        }
        getEventKey(e) {
          let t = e.key;
          if (null == t) {
            if (null == (t = e.keyIdentifier)) return 'Unidentified';
            t.startsWith('U+') &&
              ((t = String.fromCharCode(parseInt(t.substring(2), 16))),
              e.location === Wa && Qa.hasOwnProperty(t) && (t = Qa[t]));
          }
          return Za[t] || t;
        }
        getGlobalEventTarget(e, t) {
          return 'window' === t
            ? window
            : 'document' === t
            ? e
            : 'body' === t
            ? e.body
            : null;
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(e) {
          const t =
            Xa || (Xa = document.querySelector('base'))
              ? Xa.getAttribute('href')
              : null;
          return null == t
            ? null
            : ((n = t),
              Ya || (Ya = document.createElement('a')),
              Ya.setAttribute('href', n),
              '/' === Ya.pathname.charAt(0) ? Ya.pathname : '/' + Ya.pathname);
          var n;
        }
        resetBaseElement() {
          Xa = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        setData(e, t, n) {
          this.setAttribute(e, 'data-' + t, n);
        }
        getData(e, t) {
          return this.getAttribute(e, 'data-' + t);
        }
        getComputedStyle(e) {
          return getComputedStyle(e);
        }
        supportsWebAnimation() {
          return 'function' == typeof Element.prototype.animate;
        }
        performanceNow() {
          return window.performance && window.performance.now
            ? window.performance.now()
            : new Date().getTime();
        }
        supportsCookies() {
          return !0;
        }
        getCookie(e) {
          return Uo(document.cookie, e);
        }
        setCookie(e, t) {
          document.cookie = encodeURIComponent(e) + '=' + encodeURIComponent(t);
        }
      }
      let Ya,
        Xa = null;
      function eu() {
        return !!window.history.pushState;
      }
      const tu = new ke('TRANSITION_ID'),
        nu = [
          {
            provide: Ls,
            useFactory: function(e, t, n) {
              return () => {
                n.get(Us).donePromise.then(() => {
                  const n = za();
                  Array.prototype.slice
                    .apply(n.querySelectorAll(t, 'style[ng-transition]'))
                    .filter(t => n.getAttribute(t, 'ng-transition') === e)
                    .forEach(e => n.remove(e));
                });
              };
            },
            deps: [tu, zo, Dt],
            multi: !0,
          },
        ];
      class ru {
        static init() {
          var e;
          (e = new ru()), (wl = e);
        }
        addToWindow(e) {
          (Se.getAngularTestability = (t, n = !0) => {
            const r = e.findTestabilityInTree(t, n);
            if (null == r)
              throw new Error('Could not find testability for element.');
            return r;
          }),
            (Se.getAllAngularTestabilities = () => e.getAllTestabilities()),
            (Se.getAllAngularRootElements = () => e.getAllRootElements()),
            Se.frameworkStabilizers || (Se.frameworkStabilizers = []),
            Se.frameworkStabilizers.push(e => {
              const t = Se.getAllAngularTestabilities();
              let n = t.length,
                r = !1;
              const s = function(t) {
                (r = r || t), 0 == --n && e(r);
              };
              t.forEach(function(e) {
                e.whenStable(s);
              });
            });
        }
        findTestabilityInTree(e, t, n) {
          if (null == t) return null;
          const r = e.getTestability(t);
          return null != r
            ? r
            : n
            ? za().isShadowRoot(t)
              ? this.findTestabilityInTree(e, za().getHost(t), !0)
              : this.findTestabilityInTree(e, za().parentElement(t), !0)
            : null;
        }
      }
      function su(e, t) {
        ('undefined' != typeof COMPILED && COMPILED) ||
          ((Se.ng = Se.ng || {})[e] = t);
      }
      const lu = (() => ({ ApplicationRef: Ol, NgZone: cl }))();
      function iu(e) {
        return zl(e);
      }
      const ou = new ke('EventManagerPlugins');
      class au {
        constructor(e, t) {
          (this._zone = t),
            (this._eventNameToPlugin = new Map()),
            e.forEach(e => (e.manager = this)),
            (this._plugins = e.slice().reverse());
        }
        addEventListener(e, t, n) {
          return this._findPluginFor(t).addEventListener(e, t, n);
        }
        addGlobalEventListener(e, t, n) {
          return this._findPluginFor(t).addGlobalEventListener(e, t, n);
        }
        getZone() {
          return this._zone;
        }
        _findPluginFor(e) {
          const t = this._eventNameToPlugin.get(e);
          if (t) return t;
          const n = this._plugins;
          for (let r = 0; r < n.length; r++) {
            const t = n[r];
            if (t.supports(e)) return this._eventNameToPlugin.set(e, t), t;
          }
          throw new Error(`No event manager plugin found for event ${e}`);
        }
      }
      class uu {
        constructor(e) {
          this._doc = e;
        }
        addGlobalEventListener(e, t, n) {
          const r = za().getGlobalEventTarget(this._doc, e);
          if (!r)
            throw new Error(`Unsupported event target ${r} for event ${t}`);
          return this.addEventListener(r, t, n);
        }
      }
      class cu {
        constructor() {
          this._stylesSet = new Set();
        }
        addStyles(e) {
          const t = new Set();
          e.forEach(e => {
            this._stylesSet.has(e) || (this._stylesSet.add(e), t.add(e));
          }),
            this.onStylesAdded(t);
        }
        onStylesAdded(e) {}
        getAllStyles() {
          return Array.from(this._stylesSet);
        }
      }
      class hu extends cu {
        constructor(e) {
          super(),
            (this._doc = e),
            (this._hostNodes = new Set()),
            (this._styleNodes = new Set()),
            this._hostNodes.add(e.head);
        }
        _addStylesToHost(e, t) {
          e.forEach(e => {
            const n = this._doc.createElement('style');
            (n.textContent = e), this._styleNodes.add(t.appendChild(n));
          });
        }
        addHost(e) {
          this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e);
        }
        removeHost(e) {
          this._hostNodes.delete(e);
        }
        onStylesAdded(e) {
          this._hostNodes.forEach(t => this._addStylesToHost(e, t));
        }
        ngOnDestroy() {
          this._styleNodes.forEach(e => za().remove(e));
        }
      }
      const du = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
        },
        pu = /%COMP%/g,
        gu = '_nghost-%COMP%',
        fu = '_ngcontent-%COMP%';
      function mu(e, t, n) {
        for (let r = 0; r < t.length; r++) {
          let s = t[r];
          Array.isArray(s) ? mu(e, s, n) : ((s = s.replace(pu, e)), n.push(s));
        }
        return n;
      }
      function yu(e) {
        return t => {
          !1 === e(t) && (t.preventDefault(), (t.returnValue = !1));
        };
      }
      class vu {
        constructor(e, t, n) {
          (this.eventManager = e),
            (this.sharedStylesHost = t),
            (this.appId = n),
            (this.rendererByCompId = new Map()),
            (this.defaultRenderer = new bu(e));
        }
        createRenderer(e, t) {
          if (!e || !t) return this.defaultRenderer;
          switch (t.encapsulation) {
            case qe.Emulated: {
              let n = this.rendererByCompId.get(t.id);
              return (
                n ||
                  ((n = new Cu(
                    this.eventManager,
                    this.sharedStylesHost,
                    t,
                    this.appId
                  )),
                  this.rendererByCompId.set(t.id, n)),
                n.applyToHost(e),
                n
              );
            }
            case qe.Native:
            case qe.ShadowDom:
              return new xu(this.eventManager, this.sharedStylesHost, e, t);
            default:
              if (!this.rendererByCompId.has(t.id)) {
                const e = mu(t.id, t.styles, []);
                this.sharedStylesHost.addStyles(e),
                  this.rendererByCompId.set(t.id, this.defaultRenderer);
              }
              return this.defaultRenderer;
          }
        }
        begin() {}
        end() {}
      }
      class bu {
        constructor(e) {
          (this.eventManager = e), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(e, t) {
          return t
            ? document.createElementNS(du[t] || t, e)
            : document.createElement(e);
        }
        createComment(e) {
          return document.createComment(e);
        }
        createText(e) {
          return document.createTextNode(e);
        }
        appendChild(e, t) {
          e.appendChild(t);
        }
        insertBefore(e, t, n) {
          e && e.insertBefore(t, n);
        }
        removeChild(e, t) {
          e && e.removeChild(t);
        }
        selectRootElement(e, t) {
          let n = 'string' == typeof e ? document.querySelector(e) : e;
          if (!n)
            throw new Error(`The selector "${e}" did not match any elements`);
          return t || (n.textContent = ''), n;
        }
        parentNode(e) {
          return e.parentNode;
        }
        nextSibling(e) {
          return e.nextSibling;
        }
        setAttribute(e, t, n, r) {
          if (r) {
            t = r + ':' + t;
            const s = du[r];
            s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n);
          } else e.setAttribute(t, n);
        }
        removeAttribute(e, t, n) {
          if (n) {
            const r = du[n];
            r ? e.removeAttributeNS(r, t) : e.removeAttribute(`${n}:${t}`);
          } else e.removeAttribute(t);
        }
        addClass(e, t) {
          e.classList.add(t);
        }
        removeClass(e, t) {
          e.classList.remove(t);
        }
        setStyle(e, t, n, r) {
          r & gn.DashCase
            ? e.style.setProperty(t, n, r & gn.Important ? 'important' : '')
            : (e.style[t] = n);
        }
        removeStyle(e, t, n) {
          n & gn.DashCase ? e.style.removeProperty(t) : (e.style[t] = '');
        }
        setProperty(e, t, n) {
          wu(t, 'property'), (e[t] = n);
        }
        setValue(e, t) {
          e.nodeValue = t;
        }
        listen(e, t, n) {
          return (
            wu(t, 'listener'),
            'string' == typeof e
              ? this.eventManager.addGlobalEventListener(e, t, yu(n))
              : this.eventManager.addEventListener(e, t, yu(n))
          );
        }
      }
      const _u = (() => '@'.charCodeAt(0))();
      function wu(e, t) {
        if (e.charCodeAt(0) === _u)
          throw new Error(
            `Found the synthetic ${t} ${e}. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.`
          );
      }
      class Cu extends bu {
        constructor(e, t, n, r) {
          super(e), (this.component = n);
          const s = mu(r + '-' + n.id, n.styles, []);
          t.addStyles(s),
            (this.contentAttr = fu.replace(pu, r + '-' + n.id)),
            (this.hostAttr = gu.replace(pu, r + '-' + n.id));
        }
        applyToHost(e) {
          super.setAttribute(e, this.hostAttr, '');
        }
        createElement(e, t) {
          const n = super.createElement(e, t);
          return super.setAttribute(n, this.contentAttr, ''), n;
        }
      }
      class xu extends bu {
        constructor(e, t, n, r) {
          super(e),
            (this.sharedStylesHost = t),
            (this.hostEl = n),
            (this.component = r),
            (this.shadowRoot =
              r.encapsulation === qe.ShadowDom
                ? n.attachShadow({ mode: 'open' })
                : n.createShadowRoot()),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const s = mu(r.id, r.styles, []);
          for (let l = 0; l < s.length; l++) {
            const e = document.createElement('style');
            (e.textContent = s[l]), this.shadowRoot.appendChild(e);
          }
        }
        nodeOrShadowRoot(e) {
          return e === this.hostEl ? this.shadowRoot : e;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(e, t) {
          return super.appendChild(this.nodeOrShadowRoot(e), t);
        }
        insertBefore(e, t, n) {
          return super.insertBefore(this.nodeOrShadowRoot(e), t, n);
        }
        removeChild(e, t) {
          return super.removeChild(this.nodeOrShadowRoot(e), t);
        }
        parentNode(e) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(e))
          );
        }
      }
      const Su = (() =>
          ('undefined' != typeof Zone && Zone.__symbol__) ||
          function(e) {
            return '__zone_symbol__' + e;
          })(),
        ku = Su('addEventListener'),
        Eu = Su('removeEventListener'),
        Tu = {},
        Au = 'FALSE',
        Nu = 'ANGULAR',
        Ou = 'addEventListener',
        Iu = 'removeEventListener',
        Ru = '__zone_symbol__propagationStopped',
        Pu = '__zone_symbol__stopImmediatePropagation',
        Du = (() => {
          const e =
            'undefined' != typeof Zone && Zone[Su('BLACK_LISTED_EVENTS')];
          if (e) {
            const t = {};
            return (
              e.forEach(e => {
                t[e] = e;
              }),
              t
            );
          }
        })(),
        Vu = function(e) {
          return !!Du && Du.hasOwnProperty(e);
        },
        Mu = function(e) {
          const t = Tu[e.type];
          if (!t) return;
          const n = this[t];
          if (!n) return;
          const r = [e];
          if (1 === n.length) {
            const e = n[0];
            return e.zone !== Zone.current
              ? e.zone.run(e.handler, this, r)
              : e.handler.apply(this, r);
          }
          {
            const t = n.slice();
            for (let n = 0; n < t.length && !0 !== e[Ru]; n++) {
              const e = t[n];
              e.zone !== Zone.current
                ? e.zone.run(e.handler, this, r)
                : e.handler.apply(this, r);
            }
          }
        };
      class Lu extends uu {
        constructor(e, t, n) {
          super(e),
            (this.ngZone = t),
            (n &&
              (function(e) {
                return e === qo;
              })(n)) ||
              this.patchEvent();
        }
        patchEvent() {
          if ('undefined' == typeof Event || !Event || !Event.prototype) return;
          if (Event.prototype[Pu]) return;
          const e = (Event.prototype[Pu] =
            Event.prototype.stopImmediatePropagation);
          Event.prototype.stopImmediatePropagation = function() {
            this && (this[Ru] = !0), e && e.apply(this, arguments);
          };
        }
        supports(e) {
          return !0;
        }
        addEventListener(e, t, n) {
          let r = n;
          if (!e[ku] || (cl.isInAngularZone() && !Vu(t))) e[Ou](t, r, !1);
          else {
            let n = Tu[t];
            n || (n = Tu[t] = Su(Nu + t + Au));
            let s = e[n];
            const l = s && s.length > 0;
            s || (s = e[n] = []);
            const i = Vu(t) ? Zone.root : Zone.current;
            if (0 === s.length) s.push({ zone: i, handler: r });
            else {
              let e = !1;
              for (let t = 0; t < s.length; t++)
                if (s[t].handler === r) {
                  e = !0;
                  break;
                }
              e || s.push({ zone: i, handler: r });
            }
            l || e[ku](t, Mu, !1);
          }
          return () => this.removeEventListener(e, t, r);
        }
        removeEventListener(e, t, n) {
          let r = e[Eu];
          if (!r) return e[Iu].apply(e, [t, n, !1]);
          let s = Tu[t],
            l = s && e[s];
          if (!l) return e[Iu].apply(e, [t, n, !1]);
          let i = !1;
          for (let o = 0; o < l.length; o++)
            if (l[o].handler === n) {
              (i = !0), l.splice(o, 1);
              break;
            }
          i
            ? 0 === l.length && r.apply(e, [t, Mu, !1])
            : e[Iu].apply(e, [t, n, !1]);
        }
      }
      const Uu = {
          pan: !0,
          panstart: !0,
          panmove: !0,
          panend: !0,
          pancancel: !0,
          panleft: !0,
          panright: !0,
          panup: !0,
          pandown: !0,
          pinch: !0,
          pinchstart: !0,
          pinchmove: !0,
          pinchend: !0,
          pinchcancel: !0,
          pinchin: !0,
          pinchout: !0,
          press: !0,
          pressup: !0,
          rotate: !0,
          rotatestart: !0,
          rotatemove: !0,
          rotateend: !0,
          rotatecancel: !0,
          swipe: !0,
          swipeleft: !0,
          swiperight: !0,
          swipeup: !0,
          swipedown: !0,
          tap: !0,
        },
        Fu = new ke('HammerGestureConfig'),
        ju = new ke('HammerLoader');
      class $u {
        constructor() {
          (this.events = []), (this.overrides = {});
        }
        buildHammer(e) {
          const t = new Hammer(e, this.options);
          t.get('pinch').set({ enable: !0 }),
            t.get('rotate').set({ enable: !0 });
          for (const n in this.overrides) t.get(n).set(this.overrides[n]);
          return t;
        }
      }
      class Hu extends uu {
        constructor(e, t, n, r) {
          super(e), (this._config = t), (this.console = n), (this.loader = r);
        }
        supports(e) {
          return !(
            (!Uu.hasOwnProperty(e.toLowerCase()) && !this.isCustomEvent(e)) ||
            (!window.Hammer &&
              !this.loader &&
              (this.console.warn(
                `The "${e}" event cannot be bound because Hammer.JS is not ` +
                  'loaded and no custom loader has been specified.'
              ),
              1))
          );
        }
        addEventListener(e, t, n) {
          const r = this.manager.getZone();
          if (((t = t.toLowerCase()), !window.Hammer && this.loader)) {
            let r = !1,
              s = () => {
                r = !0;
              };
            return (
              this.loader()
                .then(() => {
                  if (!window.Hammer)
                    return (
                      this.console.warn(
                        'The custom HAMMER_LOADER completed, but Hammer.JS is not present.'
                      ),
                      void (s = () => {})
                    );
                  r || (s = this.addEventListener(e, t, n));
                })
                .catch(() => {
                  this.console.warn(
                    `The "${t}" event cannot be bound because the custom ` +
                      'Hammer.JS loader failed.'
                  ),
                    (s = () => {});
                }),
              () => {
                s();
              }
            );
          }
          return r.runOutsideAngular(() => {
            const s = this._config.buildHammer(e),
              l = function(e) {
                r.runGuarded(function() {
                  n(e);
                });
              };
            return (
              s.on(t, l),
              () => {
                s.off(t, l), 'function' == typeof s.destroy && s.destroy();
              }
            );
          });
        }
        isCustomEvent(e) {
          return this._config.events.indexOf(e) > -1;
        }
      }
      const zu = ['alt', 'control', 'meta', 'shift'],
        Bu = {
          alt: e => e.altKey,
          control: e => e.ctrlKey,
          meta: e => e.metaKey,
          shift: e => e.shiftKey,
        };
      class qu extends uu {
        constructor(e) {
          super(e);
        }
        supports(e) {
          return null != qu.parseEventName(e);
        }
        addEventListener(e, t, n) {
          const r = qu.parseEventName(t),
            s = qu.eventCallback(r.fullKey, n, this.manager.getZone());
          return this.manager
            .getZone()
            .runOutsideAngular(() => za().onAndCancel(e, r.domEventName, s));
        }
        static parseEventName(e) {
          const t = e.toLowerCase().split('.'),
            n = t.shift();
          if (0 === t.length || ('keydown' !== n && 'keyup' !== n)) return null;
          const r = qu._normalizeKey(t.pop());
          let s = '';
          if (
            (zu.forEach(e => {
              const n = t.indexOf(e);
              n > -1 && (t.splice(n, 1), (s += e + '.'));
            }),
            (s += r),
            0 != t.length || 0 === r.length)
          )
            return null;
          const l = {};
          return (l.domEventName = n), (l.fullKey = s), l;
        }
        static getEventFullKey(e) {
          let t = '',
            n = za().getEventKey(e);
          return (
            ' ' === (n = n.toLowerCase())
              ? (n = 'space')
              : '.' === n && (n = 'dot'),
            zu.forEach(r => {
              r != n && (0, Bu[r])(e) && (t += r + '.');
            }),
            (t += n)
          );
        }
        static eventCallback(e, t, n) {
          return r => {
            qu.getEventFullKey(r) === e && n.runGuarded(() => t(r));
          };
        }
        static _normalizeKey(e) {
          switch (e) {
            case 'esc':
              return 'escape';
            default:
              return e;
          }
        }
      }
      class Gu {}
      class Wu extends Gu {
        constructor(e) {
          super(), (this._doc = e);
        }
        sanitize(e, t) {
          if (null == t) return null;
          switch (e) {
            case St.NONE:
              return t;
            case St.HTML:
              return t instanceof Qu
                ? t.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(t, 'HTML'),
                  (function(e, t) {
                    let n = null;
                    try {
                      Ct = Ct || new rt(e);
                      let r = t ? String(t) : '';
                      n = Ct.getInertBodyElement(r);
                      let s = 5,
                        l = r;
                      do {
                        if (0 === s)
                          throw new Error(
                            'Failed to sanitize html because the input is unstable'
                          );
                        s--,
                          (r = l),
                          (l = n.innerHTML),
                          (n = Ct.getInertBodyElement(r));
                      } while (r !== l);
                      const i = new vt(),
                        o = i.sanitizeChildren(xt(n) || n);
                      return (
                        nt() &&
                          i.sanitizedSomething &&
                          console.warn(
                            'WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss'
                          ),
                        o
                      );
                    } finally {
                      if (n) {
                        const e = xt(n) || n;
                        for (; e.firstChild; ) e.removeChild(e.firstChild);
                      }
                    }
                  })(this._doc, String(t)));
            case St.STYLE:
              return t instanceof Ku
                ? t.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(t, 'Style'),
                  (function(e) {
                    if (!(e = String(e).trim())) return '';
                    const t = e.match(Tt);
                    return (t && it(t[1]) === t[1]) ||
                      (e.match(Et) &&
                        (function(e) {
                          let t = !0,
                            n = !0;
                          for (let r = 0; r < e.length; r++) {
                            const s = e.charAt(r);
                            "'" === s && n
                              ? (t = !t)
                              : '"' === s && t && (n = !n);
                          }
                          return t && n;
                        })(e))
                      ? e
                      : (nt() &&
                          console.warn(
                            `WARNING: sanitizing unsafe style value ${e} (see http://g.co/ng/security#xss).`
                          ),
                        'unsafe');
                  })(t));
            case St.SCRIPT:
              if (t instanceof Ju)
                return t.changingThisBreaksApplicationSecurity;
              throw (this.checkNotSafeValue(t, 'Script'),
              new Error('unsafe value used in a script context'));
            case St.URL:
              return t instanceof Xu || t instanceof Yu
                ? t.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(t, 'URL'), it(String(t)));
            case St.RESOURCE_URL:
              if (t instanceof Xu)
                return t.changingThisBreaksApplicationSecurity;
              throw (this.checkNotSafeValue(t, 'ResourceURL'),
              new Error(
                'unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'
              ));
            default:
              throw new Error(
                `Unexpected SecurityContext ${e} (see http://g.co/ng/security#xss)`
              );
          }
        }
        checkNotSafeValue(e, t) {
          if (e instanceof Zu)
            throw new Error(
              `Required a safe ${t}, got a ${e.getTypeName()} ` +
                '(see http://g.co/ng/security#xss)'
            );
        }
        bypassSecurityTrustHtml(e) {
          return new Qu(e);
        }
        bypassSecurityTrustStyle(e) {
          return new Ku(e);
        }
        bypassSecurityTrustScript(e) {
          return new Ju(e);
        }
        bypassSecurityTrustUrl(e) {
          return new Yu(e);
        }
        bypassSecurityTrustResourceUrl(e) {
          return new Xu(e);
        }
      }
      class Zu {
        constructor(e) {
          this.changingThisBreaksApplicationSecurity = e;
        }
        toString() {
          return (
            `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}` +
            ' (see http://g.co/ng/security#xss)'
          );
        }
      }
      class Qu extends Zu {
        getTypeName() {
          return 'HTML';
        }
      }
      class Ku extends Zu {
        getTypeName() {
          return 'Style';
        }
      }
      class Ju extends Zu {
        getTypeName() {
          return 'Script';
        }
      }
      class Yu extends Zu {
        getTypeName() {
          return 'URL';
        }
      }
      class Xu extends Zu {
        getTypeName() {
          return 'ResourceURL';
        }
      }
      const ec = El(ql, 'browser', [
        { provide: zs, useValue: Bo },
        {
          provide: Hs,
          useValue: function() {
            Ja.makeCurrent(), ru.init();
          },
          multi: !0,
        },
        {
          provide: ko,
          useClass: class extends ko {
            constructor(e) {
              super(), (this._doc = e), this._init();
            }
            _init() {
              (this.location = za().getLocation()),
                (this._history = za().getHistory());
            }
            getBaseHrefFromDOM() {
              return za().getBaseHref(this._doc);
            }
            onPopState(e) {
              za()
                .getGlobalEventTarget(this._doc, 'window')
                .addEventListener('popstate', e, !1);
            }
            onHashChange(e) {
              za()
                .getGlobalEventTarget(this._doc, 'window')
                .addEventListener('hashchange', e, !1);
            }
            get href() {
              return this.location.href;
            }
            get protocol() {
              return this.location.protocol;
            }
            get hostname() {
              return this.location.hostname;
            }
            get port() {
              return this.location.port;
            }
            get pathname() {
              return this.location.pathname;
            }
            get search() {
              return this.location.search;
            }
            get hash() {
              return this.location.hash;
            }
            set pathname(e) {
              this.location.pathname = e;
            }
            pushState(e, t, n) {
              eu()
                ? this._history.pushState(e, t, n)
                : (this.location.hash = n);
            }
            replaceState(e, t, n) {
              eu()
                ? this._history.replaceState(e, t, n)
                : (this.location.hash = n);
            }
            forward() {
              this._history.forward();
            }
            back() {
              this._history.back();
            }
            getState() {
              return this._history.state;
            }
          },
          deps: [zo],
        },
        {
          provide: zo,
          useFactory: function() {
            return document;
          },
          deps: [],
        },
      ]);
      function tc() {
        return new Xe();
      }
      class nc {
        constructor(e) {
          if (e)
            throw new Error(
              'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
            );
        }
        static withServerTransition(e) {
          return {
            ngModule: nc,
            providers: [
              { provide: Fs, useValue: e.appId },
              { provide: tu, useExisting: Fs },
              nu,
            ],
          };
        }
      }
      'undefined' != typeof window && window;
      class rc {
        constructor(e, t) {
          (this.id = e), (this.url = t);
        }
      }
      class sc extends rc {
        constructor(e, t, n = 'imperative', r = null) {
          super(e, t), (this.navigationTrigger = n), (this.restoredState = r);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class lc extends rc {
        constructor(e, t, n) {
          super(e, t), (this.urlAfterRedirects = n);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class ic extends rc {
        constructor(e, t, n) {
          super(e, t), (this.reason = n);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class oc extends rc {
        constructor(e, t, n) {
          super(e, t), (this.error = n);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class ac extends rc {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class uc extends rc {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class cc extends rc {
        constructor(e, t, n, r, s) {
          super(e, t),
            (this.urlAfterRedirects = n),
            (this.state = r),
            (this.shouldActivate = s);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class hc extends rc {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class dc extends rc {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class pc {
        constructor(e) {
          this.route = e;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class gc {
        constructor(e) {
          this.route = e;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class fc {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ChildActivationStart(path: '${(this.snapshot.routeConfig &&
            this.snapshot.routeConfig.path) ||
            ''}')`;
        }
      }
      class mc {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ChildActivationEnd(path: '${(this.snapshot.routeConfig &&
            this.snapshot.routeConfig.path) ||
            ''}')`;
        }
      }
      class yc {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ActivationStart(path: '${(this.snapshot.routeConfig &&
            this.snapshot.routeConfig.path) ||
            ''}')`;
        }
      }
      class vc {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ActivationEnd(path: '${(this.snapshot.routeConfig &&
            this.snapshot.routeConfig.path) ||
            ''}')`;
        }
      }
      class bc {
        constructor(e, t, n) {
          (this.routerEvent = e), (this.position = t), (this.anchor = n);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      class _c {}
      const wc = 'primary';
      class Cc {
        constructor(e) {
          this.params = e || {};
        }
        has(e) {
          return this.params.hasOwnProperty(e);
        }
        get(e) {
          if (this.has(e)) {
            const t = this.params[e];
            return Array.isArray(t) ? t[0] : t;
          }
          return null;
        }
        getAll(e) {
          if (this.has(e)) {
            const t = this.params[e];
            return Array.isArray(t) ? t : [t];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function xc(e) {
        return new Cc(e);
      }
      const Sc = 'ngNavigationCancelingError';
      function kc(e) {
        const t = Error('NavigationCancelingError: ' + e);
        return (t[Sc] = !0), t;
      }
      function Ec(e, t, n) {
        const r = n.path.split('/');
        if (r.length > e.length) return null;
        if ('full' === n.pathMatch && (t.hasChildren() || r.length < e.length))
          return null;
        const s = {};
        for (let l = 0; l < r.length; l++) {
          const t = r[l],
            n = e[l];
          if (t.startsWith(':')) s[t.substring(1)] = n;
          else if (t !== n.path) return null;
        }
        return { consumed: e.slice(0, r.length), posParams: s };
      }
      class Tc {
        constructor(e, t) {
          (this.routes = e), (this.module = t);
        }
      }
      function Ac(e, t = '') {
        for (let n = 0; n < e.length; n++) {
          const r = e[n];
          Nc(r, Oc(t, r));
        }
      }
      function Nc(e, t) {
        if (!e)
          throw new Error(
            `\n      Invalid configuration of route '${t}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `
          );
        if (Array.isArray(e))
          throw new Error(
            `Invalid configuration of route '${t}': Array cannot be specified`
          );
        if (
          !e.component &&
          !e.children &&
          !e.loadChildren &&
          e.outlet &&
          e.outlet !== wc
        )
          throw new Error(
            `Invalid configuration of route '${t}': a componentless route without children or loadChildren cannot have a named outlet set`
          );
        if (e.redirectTo && e.children)
          throw new Error(
            `Invalid configuration of route '${t}': redirectTo and children cannot be used together`
          );
        if (e.redirectTo && e.loadChildren)
          throw new Error(
            `Invalid configuration of route '${t}': redirectTo and loadChildren cannot be used together`
          );
        if (e.children && e.loadChildren)
          throw new Error(
            `Invalid configuration of route '${t}': children and loadChildren cannot be used together`
          );
        if (e.redirectTo && e.component)
          throw new Error(
            `Invalid configuration of route '${t}': redirectTo and component cannot be used together`
          );
        if (e.path && e.matcher)
          throw new Error(
            `Invalid configuration of route '${t}': path and matcher cannot be used together`
          );
        if (
          void 0 === e.redirectTo &&
          !e.component &&
          !e.children &&
          !e.loadChildren
        )
          throw new Error(
            `Invalid configuration of route '${t}'. One of the following must be provided: component, redirectTo, children or loadChildren`
          );
        if (void 0 === e.path && void 0 === e.matcher)
          throw new Error(
            `Invalid configuration of route '${t}': routes must have either a path or a matcher specified`
          );
        if ('string' == typeof e.path && '/' === e.path.charAt(0))
          throw new Error(
            `Invalid configuration of route '${t}': path cannot start with a slash`
          );
        if ('' === e.path && void 0 !== e.redirectTo && void 0 === e.pathMatch)
          throw new Error(
            `Invalid configuration of route '{path: "${t}", redirectTo: "${e.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`
          );
        if (
          void 0 !== e.pathMatch &&
          'full' !== e.pathMatch &&
          'prefix' !== e.pathMatch
        )
          throw new Error(
            `Invalid configuration of route '${t}': pathMatch can only be set to 'prefix' or 'full'`
          );
        e.children && Ac(e.children, t);
      }
      function Oc(e, t) {
        return t
          ? e || t.path
            ? e && !t.path
              ? `${e}/`
              : !e && t.path
              ? t.path
              : `${e}/${t.path}`
            : ''
          : e;
      }
      function Ic(e) {
        const t = e.children && e.children.map(Ic),
          n = t ? Object.assign({}, e, { children: t }) : Object.assign({}, e);
        return (
          !n.component &&
            (t || n.loadChildren) &&
            n.outlet &&
            n.outlet !== wc &&
            (n.component = _c),
          n
        );
      }
      function Rc(e, t) {
        const n = Object.keys(e),
          r = Object.keys(t);
        if (!n || !r || n.length != r.length) return !1;
        let s;
        for (let l = 0; l < n.length; l++)
          if (e[(s = n[l])] !== t[s]) return !1;
        return !0;
      }
      function Pc(e) {
        return Array.prototype.concat.apply([], e);
      }
      function Dc(e) {
        return e.length > 0 ? e[e.length - 1] : null;
      }
      function Vc(e, t) {
        for (const n in e) e.hasOwnProperty(n) && t(e[n], n);
      }
      function Mc(e) {
        return Yt(e) ? e : Jt(e) ? G(Promise.resolve(e)) : Yo(e);
      }
      function Lc(e, t, n) {
        return n
          ? (function(e, t) {
              return Rc(e, t);
            })(e.queryParams, t.queryParams) &&
              (function e(t, n) {
                if (!$c(t.segments, n.segments)) return !1;
                if (t.numberOfChildren !== n.numberOfChildren) return !1;
                for (const r in n.children) {
                  if (!t.children[r]) return !1;
                  if (!e(t.children[r], n.children[r])) return !1;
                }
                return !0;
              })(e.root, t.root)
          : (function(e, t) {
              return (
                Object.keys(t).length <= Object.keys(e).length &&
                Object.keys(t).every(n => t[n] === e[n])
              );
            })(e.queryParams, t.queryParams) &&
              (function e(t, n) {
                return (function t(n, r, s) {
                  if (n.segments.length > s.length)
                    return (
                      !!$c(n.segments.slice(0, s.length), s) && !r.hasChildren()
                    );
                  if (n.segments.length === s.length) {
                    if (!$c(n.segments, s)) return !1;
                    for (const t in r.children) {
                      if (!n.children[t]) return !1;
                      if (!e(n.children[t], r.children[t])) return !1;
                    }
                    return !0;
                  }
                  {
                    const e = s.slice(0, n.segments.length),
                      l = s.slice(n.segments.length);
                    return (
                      !!$c(n.segments, e) &&
                      !!n.children[wc] &&
                      t(n.children[wc], r, l)
                    );
                  }
                })(t, n, n.segments);
              })(e.root, t.root);
      }
      class Uc {
        constructor(e, t, n) {
          (this.root = e), (this.queryParams = t), (this.fragment = n);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = xc(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return qc.serialize(this);
        }
      }
      class Fc {
        constructor(e, t) {
          (this.segments = e),
            (this.children = t),
            (this.parent = null),
            Vc(t, (e, t) => (e.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return Gc(this);
        }
      }
      class jc {
        constructor(e, t) {
          (this.path = e), (this.parameters = t);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = xc(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return Yc(this);
        }
      }
      function $c(e, t) {
        return e.length === t.length && e.every((e, n) => e.path === t[n].path);
      }
      function Hc(e, t) {
        let n = [];
        return (
          Vc(e.children, (e, r) => {
            r === wc && (n = n.concat(t(e, r)));
          }),
          Vc(e.children, (e, r) => {
            r !== wc && (n = n.concat(t(e, r)));
          }),
          n
        );
      }
      class zc {}
      class Bc {
        parse(e) {
          const t = new rh(e);
          return new Uc(
            t.parseRootSegment(),
            t.parseQueryParams(),
            t.parseFragment()
          );
        }
        serialize(e) {
          var t;
          return `${`/${(function e(t, n) {
            if (!t.hasChildren()) return Gc(t);
            if (n) {
              const n = t.children[wc] ? e(t.children[wc], !1) : '',
                r = [];
              return (
                Vc(t.children, (t, n) => {
                  n !== wc && r.push(`${n}:${e(t, !1)}`);
                }),
                r.length > 0 ? `${n}(${r.join('//')})` : n
              );
            }
            {
              const n = Hc(t, (n, r) =>
                r === wc ? [e(t.children[wc], !1)] : [`${r}:${e(n, !1)}`]
              );
              return `${Gc(t)}/(${n.join('//')})`;
            }
          })(e.root, !0)}`}${(function(e) {
            const t = Object.keys(e).map(t => {
              const n = e[t];
              return Array.isArray(n)
                ? n.map(e => `${Zc(t)}=${Zc(e)}`).join('&')
                : `${Zc(t)}=${Zc(n)}`;
            });
            return t.length ? `?${t.join('&')}` : '';
          })(e.queryParams)}${
            'string' == typeof e.fragment
              ? `#${((t = e.fragment), encodeURI(t))}`
              : ''
          }`;
        }
      }
      const qc = new Bc();
      function Gc(e) {
        return e.segments.map(e => Yc(e)).join('/');
      }
      function Wc(e) {
        return encodeURIComponent(e)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function Zc(e) {
        return Wc(e).replace(/%3B/gi, ';');
      }
      function Qc(e) {
        return Wc(e)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%26/gi, '&');
      }
      function Kc(e) {
        return decodeURIComponent(e);
      }
      function Jc(e) {
        return Kc(e.replace(/\+/g, '%20'));
      }
      function Yc(e) {
        return `${Qc(e.path)}${((t = e.parameters),
        Object.keys(t)
          .map(e => `;${Qc(e)}=${Qc(t[e])}`)
          .join(''))}`;
        var t;
      }
      const Xc = /^[^\/()?;=#]+/;
      function eh(e) {
        const t = e.match(Xc);
        return t ? t[0] : '';
      }
      const th = /^[^=?&#]+/,
        nh = /^[^?&#]+/;
      class rh {
        constructor(e) {
          (this.url = e), (this.remaining = e);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining ||
            this.peekStartsWith('?') ||
            this.peekStartsWith('#')
              ? new Fc([], {})
              : new Fc([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const e = {};
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(e);
            } while (this.consumeOptional('&'));
          return e;
        }
        parseFragment() {
          return this.consumeOptional('#')
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ('' === this.remaining) return {};
          this.consumeOptional('/');
          const e = [];
          for (
            this.peekStartsWith('(') || e.push(this.parseSegment());
            this.peekStartsWith('/') &&
            !this.peekStartsWith('//') &&
            !this.peekStartsWith('/(');

          )
            this.capture('/'), e.push(this.parseSegment());
          let t = {};
          this.peekStartsWith('/(') &&
            (this.capture('/'), (t = this.parseParens(!0)));
          let n = {};
          return (
            this.peekStartsWith('(') && (n = this.parseParens(!1)),
            (e.length > 0 || Object.keys(t).length > 0) &&
              (n[wc] = new Fc(e, t)),
            n
          );
        }
        parseSegment() {
          const e = eh(this.remaining);
          if ('' === e && this.peekStartsWith(';'))
            throw new Error(
              `Empty path url segment cannot have parameters: '${this.remaining}'.`
            );
          return this.capture(e), new jc(Kc(e), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const e = {};
          for (; this.consumeOptional(';'); ) this.parseParam(e);
          return e;
        }
        parseParam(e) {
          const t = eh(this.remaining);
          if (!t) return;
          this.capture(t);
          let n = '';
          if (this.consumeOptional('=')) {
            const e = eh(this.remaining);
            e && this.capture((n = e));
          }
          e[Kc(t)] = Kc(n);
        }
        parseQueryParam(e) {
          const t = (function(e) {
            const t = e.match(th);
            return t ? t[0] : '';
          })(this.remaining);
          if (!t) return;
          this.capture(t);
          let n = '';
          if (this.consumeOptional('=')) {
            const e = (function(e) {
              const t = e.match(nh);
              return t ? t[0] : '';
            })(this.remaining);
            e && this.capture((n = e));
          }
          const r = Jc(t),
            s = Jc(n);
          if (e.hasOwnProperty(r)) {
            let t = e[r];
            Array.isArray(t) || (e[r] = t = [t]), t.push(s);
          } else e[r] = s;
        }
        parseParens(e) {
          const t = {};
          for (
            this.capture('(');
            !this.consumeOptional(')') && this.remaining.length > 0;

          ) {
            const n = eh(this.remaining),
              r = this.remaining[n.length];
            if ('/' !== r && ')' !== r && ';' !== r)
              throw new Error(`Cannot parse url '${this.url}'`);
            let s = void 0;
            n.indexOf(':') > -1
              ? ((s = n.substr(0, n.indexOf(':'))),
                this.capture(s),
                this.capture(':'))
              : e && (s = wc);
            const l = this.parseChildren();
            (t[s] = 1 === Object.keys(l).length ? l[wc] : new Fc([], l)),
              this.consumeOptional('//');
          }
          return t;
        }
        peekStartsWith(e) {
          return this.remaining.startsWith(e);
        }
        consumeOptional(e) {
          return (
            !!this.peekStartsWith(e) &&
            ((this.remaining = this.remaining.substring(e.length)), !0)
          );
        }
        capture(e) {
          if (!this.consumeOptional(e)) throw new Error(`Expected "${e}".`);
        }
      }
      class sh {
        constructor(e) {
          this._root = e;
        }
        get root() {
          return this._root.value;
        }
        parent(e) {
          const t = this.pathFromRoot(e);
          return t.length > 1 ? t[t.length - 2] : null;
        }
        children(e) {
          const t = lh(e, this._root);
          return t ? t.children.map(e => e.value) : [];
        }
        firstChild(e) {
          const t = lh(e, this._root);
          return t && t.children.length > 0 ? t.children[0].value : null;
        }
        siblings(e) {
          const t = ih(e, this._root);
          return t.length < 2
            ? []
            : t[t.length - 2].children.map(e => e.value).filter(t => t !== e);
        }
        pathFromRoot(e) {
          return ih(e, this._root).map(e => e.value);
        }
      }
      function lh(e, t) {
        if (e === t.value) return t;
        for (const n of t.children) {
          const t = lh(e, n);
          if (t) return t;
        }
        return null;
      }
      function ih(e, t) {
        if (e === t.value) return [t];
        for (const n of t.children) {
          const r = ih(e, n);
          if (r.length) return r.unshift(t), r;
        }
        return [];
      }
      class oh {
        constructor(e, t) {
          (this.value = e), (this.children = t);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function ah(e) {
        const t = {};
        return e && e.children.forEach(e => (t[e.value.outlet] = e)), t;
      }
      class uh extends sh {
        constructor(e, t) {
          super(e), (this.snapshot = t), fh(this, e);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function ch(e, t) {
        const n = (function(e, t) {
            const n = new ph([], {}, {}, '', {}, wc, t, null, e.root, -1, {});
            return new gh('', new oh(n, []));
          })(e, t),
          r = new Xo([new jc('', {})]),
          s = new Xo({}),
          l = new Xo({}),
          i = new Xo({}),
          o = new Xo(''),
          a = new hh(r, s, i, o, l, wc, t, n.root);
        return (a.snapshot = n.root), new uh(new oh(a, []), n);
      }
      class hh {
        constructor(e, t, n, r, s, l, i, o) {
          (this.url = e),
            (this.params = t),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = l),
            (this.component = i),
            (this._futureSnapshot = o);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe(H(e => xc(e)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(H(e => xc(e)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function dh(e, t = 'emptyOnly') {
        const n = e.pathFromRoot;
        let r = 0;
        if ('always' !== t)
          for (r = n.length - 1; r >= 1; ) {
            const e = n[r],
              t = n[r - 1];
            if (e.routeConfig && '' === e.routeConfig.path) r--;
            else {
              if (t.component) break;
              r--;
            }
          }
        return (function(e) {
          return e.reduce(
            (e, t) => ({
              params: Object.assign({}, e.params, t.params),
              data: Object.assign({}, e.data, t.data),
              resolve: Object.assign({}, e.resolve, t._resolvedData),
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(n.slice(r));
      }
      class ph {
        constructor(e, t, n, r, s, l, i, o, a, u, c) {
          (this.url = e),
            (this.params = t),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = l),
            (this.component = i),
            (this.routeConfig = o),
            (this._urlSegment = a),
            (this._lastPathIndex = u),
            (this._resolve = c);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = xc(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = xc(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map(e => e.toString())
            .join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class gh extends sh {
        constructor(e, t) {
          super(t), (this.url = e), fh(this, t);
        }
        toString() {
          return mh(this._root);
        }
      }
      function fh(e, t) {
        (t.value._routerState = e), t.children.forEach(t => fh(e, t));
      }
      function mh(e) {
        const t =
          e.children.length > 0 ? ` { ${e.children.map(mh).join(', ')} } ` : '';
        return `${e.value}${t}`;
      }
      function yh(e) {
        if (e.snapshot) {
          const t = e.snapshot,
            n = e._futureSnapshot;
          (e.snapshot = n),
            Rc(t.queryParams, n.queryParams) ||
              e.queryParams.next(n.queryParams),
            t.fragment !== n.fragment && e.fragment.next(n.fragment),
            Rc(t.params, n.params) || e.params.next(n.params),
            (function(e, t) {
              if (e.length !== t.length) return !1;
              for (let n = 0; n < e.length; ++n) if (!Rc(e[n], t[n])) return !1;
              return !0;
            })(t.url, n.url) || e.url.next(n.url),
            Rc(t.data, n.data) || e.data.next(n.data);
        } else
          (e.snapshot = e._futureSnapshot), e.data.next(e._futureSnapshot.data);
      }
      function vh(e, t) {
        var n, r;
        return (
          Rc(e.params, t.params) &&
          $c((n = e.url), (r = t.url)) &&
          n.every((e, t) => Rc(e.parameters, r[t].parameters)) &&
          !(!e.parent != !t.parent) &&
          (!e.parent || vh(e.parent, t.parent))
        );
      }
      function bh(e) {
        return (
          'object' == typeof e && null != e && !e.outlets && !e.segmentPath
        );
      }
      function _h(e, t, n, r, s) {
        let l = {};
        return (
          r &&
            Vc(r, (e, t) => {
              l[t] = Array.isArray(e) ? e.map(e => `${e}`) : `${e}`;
            }),
          new Uc(
            n.root === e
              ? t
              : (function e(t, n, r) {
                  const s = {};
                  return (
                    Vc(t.children, (t, l) => {
                      s[l] = t === n ? r : e(t, n, r);
                    }),
                    new Fc(t.segments, s)
                  );
                })(n.root, e, t),
            l,
            s
          )
        );
      }
      class wh {
        constructor(e, t, n) {
          if (
            ((this.isAbsolute = e),
            (this.numberOfDoubleDots = t),
            (this.commands = n),
            e && n.length > 0 && bh(n[0]))
          )
            throw new Error('Root segment cannot have matrix parameters');
          const r = n.find(e => 'object' == typeof e && null != e && e.outlets);
          if (r && r !== Dc(n))
            throw new Error('{outlets:{}} has to be the last command');
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            '/' == this.commands[0]
          );
        }
      }
      class Ch {
        constructor(e, t, n) {
          (this.segmentGroup = e), (this.processChildren = t), (this.index = n);
        }
      }
      function xh(e) {
        return 'object' == typeof e && null != e && e.outlets
          ? e.outlets[wc]
          : `${e}`;
      }
      function Sh(e, t, n) {
        if (
          (e || (e = new Fc([], {})),
          0 === e.segments.length && e.hasChildren())
        )
          return kh(e, t, n);
        const r = (function(e, t, n) {
            let r = 0,
              s = t;
            const l = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; s < e.segments.length; ) {
              if (r >= n.length) return l;
              const t = e.segments[s],
                i = xh(n[r]),
                o = r < n.length - 1 ? n[r + 1] : null;
              if (s > 0 && void 0 === i) break;
              if (i && o && 'object' == typeof o && void 0 === o.outlets) {
                if (!Nh(i, o, t)) return l;
                r += 2;
              } else {
                if (!Nh(i, {}, t)) return l;
                r++;
              }
              s++;
            }
            return { match: !0, pathIndex: s, commandIndex: r };
          })(e, t, n),
          s = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < e.segments.length) {
          const t = new Fc(e.segments.slice(0, r.pathIndex), {});
          return (
            (t.children[wc] = new Fc(
              e.segments.slice(r.pathIndex),
              e.children
            )),
            kh(t, 0, s)
          );
        }
        return r.match && 0 === s.length
          ? new Fc(e.segments, {})
          : r.match && !e.hasChildren()
          ? Eh(e, t, n)
          : r.match
          ? kh(e, 0, s)
          : Eh(e, t, n);
      }
      function kh(e, t, n) {
        if (0 === n.length) return new Fc(e.segments, {});
        {
          const r = (function(e) {
              return 'object' != typeof e[0]
                ? { [wc]: e }
                : void 0 === e[0].outlets
                ? { [wc]: e }
                : e[0].outlets;
            })(n),
            s = {};
          return (
            Vc(r, (n, r) => {
              null !== n && (s[r] = Sh(e.children[r], t, n));
            }),
            Vc(e.children, (e, t) => {
              void 0 === r[t] && (s[t] = e);
            }),
            new Fc(e.segments, s)
          );
        }
      }
      function Eh(e, t, n) {
        const r = e.segments.slice(0, t);
        let s = 0;
        for (; s < n.length; ) {
          if ('object' == typeof n[s] && void 0 !== n[s].outlets) {
            const e = Th(n[s].outlets);
            return new Fc(r, e);
          }
          if (0 === s && bh(n[0])) {
            r.push(new jc(e.segments[t].path, n[0])), s++;
            continue;
          }
          const l = xh(n[s]),
            i = s < n.length - 1 ? n[s + 1] : null;
          l && i && bh(i)
            ? (r.push(new jc(l, Ah(i))), (s += 2))
            : (r.push(new jc(l, {})), s++);
        }
        return new Fc(r, {});
      }
      function Th(e) {
        const t = {};
        return (
          Vc(e, (e, n) => {
            null !== e && (t[n] = Eh(new Fc([], {}), 0, e));
          }),
          t
        );
      }
      function Ah(e) {
        const t = {};
        return Vc(e, (e, n) => (t[n] = `${e}`)), t;
      }
      function Nh(e, t, n) {
        return e == n.path && Rc(t, n.parameters);
      }
      const Oh = (e, t, n) =>
        H(
          r => (
            new Ih(t, r.targetRouterState, r.currentRouterState, n).activate(e),
            r
          )
        );
      class Ih {
        constructor(e, t, n, r) {
          (this.routeReuseStrategy = e),
            (this.futureState = t),
            (this.currState = n),
            (this.forwardEvent = r);
        }
        activate(e) {
          const t = this.futureState._root,
            n = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(t, n, e),
            yh(this.futureState.root),
            this.activateChildRoutes(t, n, e);
        }
        deactivateChildRoutes(e, t, n) {
          const r = ah(t);
          e.children.forEach(e => {
            const t = e.value.outlet;
            this.deactivateRoutes(e, r[t], n), delete r[t];
          }),
            Vc(r, (e, t) => {
              this.deactivateRouteAndItsChildren(e, n);
            });
        }
        deactivateRoutes(e, t, n) {
          const r = e.value,
            s = t ? t.value : null;
          if (r === s)
            if (r.component) {
              const s = n.getContext(r.outlet);
              s && this.deactivateChildRoutes(e, t, s.children);
            } else this.deactivateChildRoutes(e, t, n);
          else s && this.deactivateRouteAndItsChildren(t, n);
        }
        deactivateRouteAndItsChildren(e, t) {
          this.routeReuseStrategy.shouldDetach(e.value.snapshot)
            ? this.detachAndStoreRouteSubtree(e, t)
            : this.deactivateRouteAndOutlet(e, t);
        }
        detachAndStoreRouteSubtree(e, t) {
          const n = t.getContext(e.value.outlet);
          if (n && n.outlet) {
            const t = n.outlet.detach(),
              r = n.children.onOutletDeactivated();
            this.routeReuseStrategy.store(e.value.snapshot, {
              componentRef: t,
              route: e,
              contexts: r,
            });
          }
        }
        deactivateRouteAndOutlet(e, t) {
          const n = t.getContext(e.value.outlet);
          if (n) {
            const r = ah(e),
              s = e.value.component ? n.children : t;
            Vc(r, (e, t) => this.deactivateRouteAndItsChildren(e, s)),
              n.outlet &&
                (n.outlet.deactivate(), n.children.onOutletDeactivated());
          }
        }
        activateChildRoutes(e, t, n) {
          const r = ah(t);
          e.children.forEach(e => {
            this.activateRoutes(e, r[e.value.outlet], n),
              this.forwardEvent(new vc(e.value.snapshot));
          }),
            e.children.length && this.forwardEvent(new mc(e.value.snapshot));
        }
        activateRoutes(e, t, n) {
          const r = e.value,
            s = t ? t.value : null;
          if ((yh(r), r === s))
            if (r.component) {
              const s = n.getOrCreateContext(r.outlet);
              this.activateChildRoutes(e, t, s.children);
            } else this.activateChildRoutes(e, t, n);
          else if (r.component) {
            const t = n.getOrCreateContext(r.outlet);
            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
              const e = this.routeReuseStrategy.retrieve(r.snapshot);
              this.routeReuseStrategy.store(r.snapshot, null),
                t.children.onOutletReAttached(e.contexts),
                (t.attachRef = e.componentRef),
                (t.route = e.route.value),
                t.outlet && t.outlet.attach(e.componentRef, e.route.value),
                Rh(e.route);
            } else {
              const n = (function(e) {
                  for (let t = e.parent; t; t = t.parent) {
                    const e = t.routeConfig;
                    if (e && e._loadedConfig) return e._loadedConfig;
                    if (e && e.component) return null;
                  }
                  return null;
                })(r.snapshot),
                s = n ? n.module.componentFactoryResolver : null;
              (t.attachRef = null),
                (t.route = r),
                (t.resolver = s),
                t.outlet && t.outlet.activateWith(r, s),
                this.activateChildRoutes(e, null, t.children);
            }
          } else this.activateChildRoutes(e, null, n);
        }
      }
      function Rh(e) {
        yh(e.value), e.children.forEach(Rh);
      }
      function Ph(e) {
        return 'function' == typeof e;
      }
      function Dh(e) {
        return e instanceof Uc;
      }
      class Vh {
        constructor(e) {
          this.segmentGroup = e || null;
        }
      }
      class Mh {
        constructor(e) {
          this.urlTree = e;
        }
      }
      function Lh(e) {
        return new w(t => t.error(new Vh(e)));
      }
      function Uh(e) {
        return new w(t => t.error(new Mh(e)));
      }
      function Fh(e) {
        return new w(t =>
          t.error(
            new Error(
              `Only absolute redirects can have named outlets. redirectTo: '${e}'`
            )
          )
        );
      }
      class jh {
        constructor(e, t, n, r, s) {
          (this.configLoader = t),
            (this.urlSerializer = n),
            (this.urlTree = r),
            (this.config = s),
            (this.allowRedirects = !0),
            (this.ngModule = e.get($e));
        }
        apply() {
          return this.expandSegmentGroup(
            this.ngModule,
            this.config,
            this.urlTree.root,
            wc
          )
            .pipe(
              H(e =>
                this.createUrlTree(
                  e,
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              Sa(e => {
                if (e instanceof Mh)
                  return (this.allowRedirects = !1), this.match(e.urlTree);
                if (e instanceof Vh) throw this.noMatchError(e);
                throw e;
              })
            );
        }
        match(e) {
          return this.expandSegmentGroup(this.ngModule, this.config, e.root, wc)
            .pipe(H(t => this.createUrlTree(t, e.queryParams, e.fragment)))
            .pipe(
              Sa(e => {
                if (e instanceof Vh) throw this.noMatchError(e);
                throw e;
              })
            );
        }
        noMatchError(e) {
          return new Error(
            `Cannot match any routes. URL Segment: '${e.segmentGroup}'`
          );
        }
        createUrlTree(e, t, n) {
          const r = e.segments.length > 0 ? new Fc([], { [wc]: e }) : e;
          return new Uc(r, t, n);
        }
        expandSegmentGroup(e, t, n, r) {
          return 0 === n.segments.length && n.hasChildren()
            ? this.expandChildren(e, t, n).pipe(H(e => new Fc([], e)))
            : this.expandSegment(e, n, t, n.segments, r, !0);
        }
        expandChildren(e, t, n) {
          return (function(e, t) {
            if (0 === Object.keys(e).length) return Yo({});
            const n = [],
              r = [],
              s = {};
            return (
              Vc(e, (e, l) => {
                const i = t(l, e).pipe(H(e => (s[l] = e)));
                l === wc ? n.push(i) : r.push(i);
              }),
              Yo.apply(null, n.concat(r)).pipe(
                ia(),
                xa(),
                H(() => s)
              )
            );
          })(n.children, (n, r) => this.expandSegmentGroup(e, t, r, n));
        }
        expandSegment(e, t, n, r, s, l) {
          return Yo(...n).pipe(
            H(i =>
              this.expandSegmentAgainstRoute(e, t, n, i, r, s, l).pipe(
                Sa(e => {
                  if (e instanceof Vh) return Yo(null);
                  throw e;
                })
              )
            ),
            ia(),
            Oa(e => !!e),
            Sa((e, n) => {
              if (e instanceof ta || 'EmptyError' === e.name) {
                if (this.noLeftoversInUrl(t, r, s)) return Yo(new Fc([], {}));
                throw new Vh(t);
              }
              throw e;
            })
          );
        }
        noLeftoversInUrl(e, t, n) {
          return 0 === t.length && !e.children[n];
        }
        expandSegmentAgainstRoute(e, t, n, r, s, l, i) {
          return Bh(r) !== l
            ? Lh(t)
            : void 0 === r.redirectTo
            ? this.matchSegmentAgainstRoute(e, t, r, s)
            : i && this.allowRedirects
            ? this.expandSegmentAgainstRouteUsingRedirect(e, t, n, r, s, l)
            : Lh(t);
        }
        expandSegmentAgainstRouteUsingRedirect(e, t, n, r, s, l) {
          return '**' === r.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(e, n, r, l)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                e,
                t,
                n,
                r,
                s,
                l
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(e, t, n, r) {
          const s = this.applyRedirectCommands([], n.redirectTo, {});
          return n.redirectTo.startsWith('/')
            ? Uh(s)
            : this.lineralizeSegments(n, s).pipe(
                W(n => {
                  const s = new Fc(n, {});
                  return this.expandSegment(e, s, t, n, r, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(e, t, n, r, s, l) {
          const {
            matched: i,
            consumedSegments: o,
            lastChild: a,
            positionalParamSegments: u,
          } = $h(t, r, s);
          if (!i) return Lh(t);
          const c = this.applyRedirectCommands(o, r.redirectTo, u);
          return r.redirectTo.startsWith('/')
            ? Uh(c)
            : this.lineralizeSegments(r, c).pipe(
                W(r => this.expandSegment(e, t, n, r.concat(s.slice(a)), l, !1))
              );
        }
        matchSegmentAgainstRoute(e, t, n, r) {
          if ('**' === n.path)
            return n.loadChildren
              ? this.configLoader
                  .load(e.injector, n)
                  .pipe(H(e => ((n._loadedConfig = e), new Fc(r, {}))))
              : Yo(new Fc(r, {}));
          const { matched: s, consumedSegments: l, lastChild: i } = $h(t, n, r);
          if (!s) return Lh(t);
          const o = r.slice(i);
          return this.getChildConfig(e, n, r).pipe(
            W(e => {
              const n = e.module,
                r = e.routes,
                { segmentGroup: s, slicedSegments: i } = (function(e, t, n, r) {
                  return n.length > 0 &&
                    (function(e, t, n) {
                      return n.some(n => zh(e, t, n) && Bh(n) !== wc);
                    })(e, n, r)
                    ? {
                        segmentGroup: Hh(
                          new Fc(
                            t,
                            (function(e, t) {
                              const n = {};
                              n[wc] = t;
                              for (const r of e)
                                '' === r.path &&
                                  Bh(r) !== wc &&
                                  (n[Bh(r)] = new Fc([], {}));
                              return n;
                            })(r, new Fc(n, e.children))
                          )
                        ),
                        slicedSegments: [],
                      }
                    : 0 === n.length &&
                      (function(e, t, n) {
                        return n.some(n => zh(e, t, n));
                      })(e, n, r)
                    ? {
                        segmentGroup: Hh(
                          new Fc(
                            e.segments,
                            (function(e, t, n, r) {
                              const s = {};
                              for (const l of n)
                                zh(e, t, l) &&
                                  !r[Bh(l)] &&
                                  (s[Bh(l)] = new Fc([], {}));
                              return Object.assign({}, r, s);
                            })(e, n, r, e.children)
                          )
                        ),
                        slicedSegments: n,
                      }
                    : { segmentGroup: e, slicedSegments: n };
                })(t, l, o, r);
              return 0 === i.length && s.hasChildren()
                ? this.expandChildren(n, r, s).pipe(H(e => new Fc(l, e)))
                : 0 === r.length && 0 === i.length
                ? Yo(new Fc(l, {}))
                : this.expandSegment(n, s, r, i, wc, !0).pipe(
                    H(e => new Fc(l.concat(e.segments), e.children))
                  );
            })
          );
        }
        getChildConfig(e, t, n) {
          return t.children
            ? Yo(new Tc(t.children, e))
            : t.loadChildren
            ? void 0 !== t._loadedConfig
              ? Yo(t._loadedConfig)
              : (function(e, t, n) {
                  const r = t.canLoad;
                  return r && 0 !== r.length
                    ? G(r)
                        .pipe(
                          H(r => {
                            const s = e.get(r);
                            let l;
                            if (
                              (function(e) {
                                return e && Ph(e.canLoad);
                              })(s)
                            )
                              l = s.canLoad(t, n);
                            else {
                              if (!Ph(s))
                                throw new Error('Invalid CanLoad guard');
                              l = s(t, n);
                            }
                            return Mc(l);
                          })
                        )
                        .pipe(
                          ia(),
                          ((s = e => !0 === e),
                          e => e.lift(new Ia(s, void 0, e)))
                        )
                    : Yo(!0);
                  var s;
                })(e.injector, t, n).pipe(
                  W(n =>
                    n
                      ? this.configLoader
                          .load(e.injector, t)
                          .pipe(H(e => ((t._loadedConfig = e), e)))
                      : (function(e) {
                          return new w(t =>
                            t.error(
                              kc(
                                `Cannot load children because the guard of the route "path: '${e.path}'" returned false`
                              )
                            )
                          );
                        })(t)
                  )
                )
            : Yo(new Tc([], e));
        }
        lineralizeSegments(e, t) {
          let n = [],
            r = t.root;
          for (;;) {
            if (((n = n.concat(r.segments)), 0 === r.numberOfChildren))
              return Yo(n);
            if (r.numberOfChildren > 1 || !r.children[wc])
              return Fh(e.redirectTo);
            r = r.children[wc];
          }
        }
        applyRedirectCommands(e, t, n) {
          return this.applyRedirectCreatreUrlTree(
            t,
            this.urlSerializer.parse(t),
            e,
            n
          );
        }
        applyRedirectCreatreUrlTree(e, t, n, r) {
          const s = this.createSegmentGroup(e, t.root, n, r);
          return new Uc(
            s,
            this.createQueryParams(t.queryParams, this.urlTree.queryParams),
            t.fragment
          );
        }
        createQueryParams(e, t) {
          const n = {};
          return (
            Vc(e, (e, r) => {
              if ('string' == typeof e && e.startsWith(':')) {
                const s = e.substring(1);
                n[r] = t[s];
              } else n[r] = e;
            }),
            n
          );
        }
        createSegmentGroup(e, t, n, r) {
          const s = this.createSegments(e, t.segments, n, r);
          let l = {};
          return (
            Vc(t.children, (t, s) => {
              l[s] = this.createSegmentGroup(e, t, n, r);
            }),
            new Fc(s, l)
          );
        }
        createSegments(e, t, n, r) {
          return t.map(t =>
            t.path.startsWith(':')
              ? this.findPosParam(e, t, r)
              : this.findOrReturn(t, n)
          );
        }
        findPosParam(e, t, n) {
          const r = n[t.path.substring(1)];
          if (!r)
            throw new Error(
              `Cannot redirect to '${e}'. Cannot find '${t.path}'.`
            );
          return r;
        }
        findOrReturn(e, t) {
          let n = 0;
          for (const r of t) {
            if (r.path === e.path) return t.splice(n), r;
            n++;
          }
          return e;
        }
      }
      function $h(e, t, n) {
        if ('' === t.path)
          return 'full' === t.pathMatch && (e.hasChildren() || n.length > 0)
            ? {
                matched: !1,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {},
              }
            : {
                matched: !0,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {},
              };
        const r = (t.matcher || Ec)(n, e, t);
        return r
          ? {
              matched: !0,
              consumedSegments: r.consumed,
              lastChild: r.consumed.length,
              positionalParamSegments: r.posParams,
            }
          : {
              matched: !1,
              consumedSegments: [],
              lastChild: 0,
              positionalParamSegments: {},
            };
      }
      function Hh(e) {
        if (1 === e.numberOfChildren && e.children[wc]) {
          const t = e.children[wc];
          return new Fc(e.segments.concat(t.segments), t.children);
        }
        return e;
      }
      function zh(e, t, n) {
        return (
          (!(e.hasChildren() || t.length > 0) || 'full' !== n.pathMatch) &&
          '' === n.path &&
          void 0 !== n.redirectTo
        );
      }
      function Bh(e) {
        return e.outlet || wc;
      }
      class qh {
        constructor(e) {
          (this.path = e), (this.route = this.path[this.path.length - 1]);
        }
      }
      class Gh {
        constructor(e, t) {
          (this.component = e), (this.route = t);
        }
      }
      function Wh(e, t, n) {
        const r = e._root;
        return (function e(
          t,
          n,
          r,
          s,
          l = { canDeactivateChecks: [], canActivateChecks: [] }
        ) {
          const i = ah(n);
          return (
            t.children.forEach(t => {
              !(function(
                t,
                n,
                r,
                s,
                l = { canDeactivateChecks: [], canActivateChecks: [] }
              ) {
                const i = t.value,
                  o = n ? n.value : null,
                  a = r ? r.getContext(t.value.outlet) : null;
                if (o && i.routeConfig === o.routeConfig) {
                  const u = (function(e, t, n) {
                    if ('function' == typeof n) return n(e, t);
                    switch (n) {
                      case 'pathParamsChange':
                        return !$c(e.url, t.url);
                      case 'pathParamsOrQueryParamsChange':
                        return (
                          !$c(e.url, t.url) || !Rc(e.queryParams, t.queryParams)
                        );
                      case 'always':
                        return !0;
                      case 'paramsOrQueryParamsChange':
                        return !vh(e, t) || !Rc(e.queryParams, t.queryParams);
                      case 'paramsChange':
                      default:
                        return !vh(e, t);
                    }
                  })(o, i, i.routeConfig.runGuardsAndResolvers);
                  u
                    ? l.canActivateChecks.push(new qh(s))
                    : ((i.data = o.data), (i._resolvedData = o._resolvedData)),
                    e(t, n, i.component ? (a ? a.children : null) : r, s, l),
                    u &&
                      l.canDeactivateChecks.push(
                        new Gh((a && a.outlet && a.outlet.component) || null, o)
                      );
                } else
                  o && Qh(n, a, l),
                    l.canActivateChecks.push(new qh(s)),
                    e(t, null, i.component ? (a ? a.children : null) : r, s, l);
              })(t, i[t.value.outlet], r, s.concat([t.value]), l),
                delete i[t.value.outlet];
            }),
            Vc(i, (e, t) => Qh(e, r.getContext(t), l)),
            l
          );
        })(r, t ? t._root : null, n, [r.value]);
      }
      function Zh(e, t, n) {
        const r = (function(e) {
          if (!e) return null;
          for (let t = e.parent; t; t = t.parent) {
            const e = t.routeConfig;
            if (e && e._loadedConfig) return e._loadedConfig;
          }
          return null;
        })(t);
        return (r ? r.module.injector : n).get(e);
      }
      function Qh(e, t, n) {
        const r = ah(e),
          s = e.value;
        Vc(r, (e, r) => {
          Qh(e, s.component ? (t ? t.children.getContext(r) : null) : t, n);
        }),
          n.canDeactivateChecks.push(
            new Gh(
              s.component && t && t.outlet && t.outlet.isActivated
                ? t.outlet.component
                : null,
              s
            )
          );
      }
      const Kh = Symbol('INITIAL_VALUE');
      function Jh() {
        return Pa(e =>
          (function(...e) {
            let t = null,
              n = null;
            return (
              N(e[e.length - 1]) && (n = e.pop()),
              'function' == typeof e[e.length - 1] && (t = e.pop()),
              1 === e.length && a(e[0]) && (e = e[0]),
              q(e, n).lift(new ra(t))
            );
          })(
            ...e.map(e =>
              e.pipe(
                Ta(1),
                (function(...e) {
                  return t => {
                    let n = e[e.length - 1];
                    N(n) ? e.pop() : (n = null);
                    const r = e.length;
                    return (function(...e) {
                      return ia()(Yo(...e));
                    })(1 !== r || n ? (r > 0 ? q(e, n) : Ko(n)) : Jo(e[0]), t);
                  };
                })(Kh)
              )
            )
          ).pipe(
            Ma((e, t) => {
              let n = !1;
              return t.reduce((e, r, s) => {
                if (e !== Kh) return e;
                if ((r === Kh && (n = !0), !n)) {
                  if (!1 === r) return r;
                  if (s === t.length - 1 || Dh(r)) return r;
                }
                return e;
              }, e);
            }, Kh),
            oa(e => e !== Kh),
            H(e => (Dh(e) ? e : !0 === e)),
            Ta(1)
          )
        );
      }
      function Yh(e, t) {
        return null !== e && t && t(new yc(e)), Yo(!0);
      }
      function Xh(e, t) {
        return null !== e && t && t(new fc(e)), Yo(!0);
      }
      function ed(e, t, n) {
        const r = t.routeConfig ? t.routeConfig.canActivate : null;
        return r && 0 !== r.length
          ? Yo(
              r.map(r =>
                la(() => {
                  const s = Zh(r, t, n);
                  let l;
                  if (
                    (function(e) {
                      return e && Ph(e.canActivate);
                    })(s)
                  )
                    l = Mc(s.canActivate(t, e));
                  else {
                    if (!Ph(s)) throw new Error('Invalid CanActivate guard');
                    l = Mc(s(t, e));
                  }
                  return l.pipe(Oa());
                })
              )
            ).pipe(Jh())
          : Yo(!0);
      }
      function td(e, t, n) {
        const r = t[t.length - 1],
          s = t
            .slice(0, t.length - 1)
            .reverse()
            .map(e =>
              (function(e) {
                const t = e.routeConfig ? e.routeConfig.canActivateChild : null;
                return t && 0 !== t.length ? { node: e, guards: t } : null;
              })(e)
            )
            .filter(e => null !== e)
            .map(t =>
              la(() =>
                Yo(
                  t.guards.map(s => {
                    const l = Zh(s, t.node, n);
                    let i;
                    if (
                      (function(e) {
                        return e && Ph(e.canActivateChild);
                      })(l)
                    )
                      i = Mc(l.canActivateChild(r, e));
                    else {
                      if (!Ph(l))
                        throw new Error('Invalid CanActivateChild guard');
                      i = Mc(l(r, e));
                    }
                    return i.pipe(Oa());
                  })
                ).pipe(Jh())
              )
            );
        return Yo(s).pipe(Jh());
      }
      class nd {}
      class rd {
        constructor(e, t, n, r, s, l) {
          (this.rootComponentType = e),
            (this.config = t),
            (this.urlTree = n),
            (this.url = r),
            (this.paramsInheritanceStrategy = s),
            (this.relativeLinkResolution = l);
        }
        recognize() {
          try {
            const e = id(
                this.urlTree.root,
                [],
                [],
                this.config,
                this.relativeLinkResolution
              ).segmentGroup,
              t = this.processSegmentGroup(this.config, e, wc),
              n = new ph(
                [],
                Object.freeze({}),
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                {},
                wc,
                this.rootComponentType,
                null,
                this.urlTree.root,
                -1,
                {}
              ),
              r = new oh(n, t),
              s = new gh(this.url, r);
            return this.inheritParamsAndData(s._root), Yo(s);
          } catch (e) {
            return new w(t => t.error(e));
          }
        }
        inheritParamsAndData(e) {
          const t = e.value,
            n = dh(t, this.paramsInheritanceStrategy);
          (t.params = Object.freeze(n.params)),
            (t.data = Object.freeze(n.data)),
            e.children.forEach(e => this.inheritParamsAndData(e));
        }
        processSegmentGroup(e, t, n) {
          return 0 === t.segments.length && t.hasChildren()
            ? this.processChildren(e, t)
            : this.processSegment(e, t, t.segments, n);
        }
        processChildren(e, t) {
          const n = Hc(t, (t, n) => this.processSegmentGroup(e, t, n));
          return (
            (function(e) {
              const t = {};
              e.forEach(e => {
                const n = t[e.value.outlet];
                if (n) {
                  const t = n.url.map(e => e.toString()).join('/'),
                    r = e.value.url.map(e => e.toString()).join('/');
                  throw new Error(
                    `Two segments cannot have the same outlet name: '${t}' and '${r}'.`
                  );
                }
                t[e.value.outlet] = e.value;
              });
            })(n),
            n.sort((e, t) =>
              e.value.outlet === wc
                ? -1
                : t.value.outlet === wc
                ? 1
                : e.value.outlet.localeCompare(t.value.outlet)
            ),
            n
          );
        }
        processSegment(e, t, n, r) {
          for (const l of e)
            try {
              return this.processSegmentAgainstRoute(l, t, n, r);
            } catch (s) {
              if (!(s instanceof nd)) throw s;
            }
          if (this.noLeftoversInUrl(t, n, r)) return [];
          throw new nd();
        }
        noLeftoversInUrl(e, t, n) {
          return 0 === t.length && !e.children[n];
        }
        processSegmentAgainstRoute(e, t, n, r) {
          if (e.redirectTo) throw new nd();
          if ((e.outlet || wc) !== r) throw new nd();
          let s,
            l = [],
            i = [];
          if ('**' === e.path) {
            const l = n.length > 0 ? Dc(n).parameters : {};
            s = new ph(
              n,
              l,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              ud(e),
              r,
              e.component,
              e,
              sd(t),
              ld(t) + n.length,
              cd(e)
            );
          } else {
            const o = (function(e, t, n) {
              if ('' === t.path) {
                if ('full' === t.pathMatch && (e.hasChildren() || n.length > 0))
                  throw new nd();
                return { consumedSegments: [], lastChild: 0, parameters: {} };
              }
              const r = (t.matcher || Ec)(n, e, t);
              if (!r) throw new nd();
              const s = {};
              Vc(r.posParams, (e, t) => {
                s[t] = e.path;
              });
              const l =
                r.consumed.length > 0
                  ? Object.assign(
                      {},
                      s,
                      r.consumed[r.consumed.length - 1].parameters
                    )
                  : s;
              return {
                consumedSegments: r.consumed,
                lastChild: r.consumed.length,
                parameters: l,
              };
            })(t, e, n);
            (l = o.consumedSegments),
              (i = n.slice(o.lastChild)),
              (s = new ph(
                l,
                o.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                ud(e),
                r,
                e.component,
                e,
                sd(t),
                ld(t) + l.length,
                cd(e)
              ));
          }
          const o = (function(e) {
              return e.children
                ? e.children
                : e.loadChildren
                ? e._loadedConfig.routes
                : [];
            })(e),
            { segmentGroup: a, slicedSegments: u } = id(
              t,
              l,
              i,
              o,
              this.relativeLinkResolution
            );
          if (0 === u.length && a.hasChildren()) {
            const e = this.processChildren(o, a);
            return [new oh(s, e)];
          }
          if (0 === o.length && 0 === u.length) return [new oh(s, [])];
          const c = this.processSegment(o, a, u, wc);
          return [new oh(s, c)];
        }
      }
      function sd(e) {
        let t = e;
        for (; t._sourceSegment; ) t = t._sourceSegment;
        return t;
      }
      function ld(e) {
        let t = e,
          n = t._segmentIndexShift ? t._segmentIndexShift : 0;
        for (; t._sourceSegment; )
          n += (t = t._sourceSegment)._segmentIndexShift
            ? t._segmentIndexShift
            : 0;
        return n - 1;
      }
      function id(e, t, n, r, s) {
        if (
          n.length > 0 &&
          (function(e, t, n) {
            return n.some(n => od(e, t, n) && ad(n) !== wc);
          })(e, n, r)
        ) {
          const s = new Fc(
            t,
            (function(e, t, n, r) {
              const s = {};
              (s[wc] = r),
                (r._sourceSegment = e),
                (r._segmentIndexShift = t.length);
              for (const l of n)
                if ('' === l.path && ad(l) !== wc) {
                  const n = new Fc([], {});
                  (n._sourceSegment = e),
                    (n._segmentIndexShift = t.length),
                    (s[ad(l)] = n);
                }
              return s;
            })(e, t, r, new Fc(n, e.children))
          );
          return (
            (s._sourceSegment = e),
            (s._segmentIndexShift = t.length),
            { segmentGroup: s, slicedSegments: [] }
          );
        }
        if (
          0 === n.length &&
          (function(e, t, n) {
            return n.some(n => od(e, t, n));
          })(e, n, r)
        ) {
          const l = new Fc(
            e.segments,
            (function(e, t, n, r, s, l) {
              const i = {};
              for (const o of r)
                if (od(e, n, o) && !s[ad(o)]) {
                  const n = new Fc([], {});
                  (n._sourceSegment = e),
                    (n._segmentIndexShift =
                      'legacy' === l ? e.segments.length : t.length),
                    (i[ad(o)] = n);
                }
              return Object.assign({}, s, i);
            })(e, t, n, r, e.children, s)
          );
          return (
            (l._sourceSegment = e),
            (l._segmentIndexShift = t.length),
            { segmentGroup: l, slicedSegments: n }
          );
        }
        const l = new Fc(e.segments, e.children);
        return (
          (l._sourceSegment = e),
          (l._segmentIndexShift = t.length),
          { segmentGroup: l, slicedSegments: n }
        );
      }
      function od(e, t, n) {
        return (
          (!(e.hasChildren() || t.length > 0) || 'full' !== n.pathMatch) &&
          '' === n.path &&
          void 0 === n.redirectTo
        );
      }
      function ad(e) {
        return e.outlet || wc;
      }
      function ud(e) {
        return e.data || {};
      }
      function cd(e) {
        return e.resolve || {};
      }
      function hd(e, t, n, r) {
        const s = Zh(e, t, r);
        return Mc(s.resolve ? s.resolve(t, n) : s(t, n));
      }
      function dd(e) {
        return function(t) {
          return t.pipe(
            Pa(t => {
              const n = e(t);
              return n ? G(n).pipe(H(() => t)) : G([t]);
            })
          );
        };
      }
      class pd {}
      class gd {
        shouldDetach(e) {
          return !1;
        }
        store(e, t) {}
        shouldAttach(e) {
          return !1;
        }
        retrieve(e) {
          return null;
        }
        shouldReuseRoute(e, t) {
          return e.routeConfig === t.routeConfig;
        }
      }
      const fd = new ke('ROUTES');
      class md {
        constructor(e, t, n, r) {
          (this.loader = e),
            (this.compiler = t),
            (this.onLoadStartListener = n),
            (this.onLoadEndListener = r);
        }
        load(e, t) {
          return (
            this.onLoadStartListener && this.onLoadStartListener(t),
            this.loadModuleFactory(t.loadChildren).pipe(
              H(n => {
                this.onLoadEndListener && this.onLoadEndListener(t);
                const r = n.create(e);
                return new Tc(Pc(r.injector.get(fd)).map(Ic), r);
              })
            )
          );
        }
        loadModuleFactory(e) {
          return 'string' == typeof e
            ? G(this.loader.load(e))
            : Mc(e()).pipe(
                W(e =>
                  e instanceof He
                    ? Yo(e)
                    : G(this.compiler.compileModuleAsync(e))
                )
              );
        }
      }
      class yd {}
      class vd {
        shouldProcessUrl(e) {
          return !0;
        }
        extract(e) {
          return e;
        }
        merge(e, t) {
          return e;
        }
      }
      function bd(e) {
        throw e;
      }
      function _d(e, t, n) {
        return t.parse('/');
      }
      function wd(e, t) {
        return Yo(null);
      }
      class Cd {
        constructor(e, t, n, r, s, l, i, o) {
          (this.rootComponentType = e),
            (this.urlSerializer = t),
            (this.rootContexts = n),
            (this.location = r),
            (this.config = o),
            (this.lastSuccessfulNavigation = null),
            (this.currentNavigation = null),
            (this.navigationId = 0),
            (this.isNgZoneEnabled = !1),
            (this.events = new T()),
            (this.errorHandler = bd),
            (this.malformedUriErrorHandler = _d),
            (this.navigated = !1),
            (this.lastSuccessfulId = -1),
            (this.hooks = { beforePreactivation: wd, afterPreactivation: wd }),
            (this.urlHandlingStrategy = new vd()),
            (this.routeReuseStrategy = new gd()),
            (this.onSameUrlNavigation = 'ignore'),
            (this.paramsInheritanceStrategy = 'emptyOnly'),
            (this.urlUpdateStrategy = 'deferred'),
            (this.relativeLinkResolution = 'legacy'),
            (this.ngModule = s.get($e)),
            (this.console = s.get(qs));
          const a = s.get(cl);
          (this.isNgZoneEnabled = a instanceof cl),
            this.resetConfig(o),
            (this.currentUrlTree = new Uc(new Fc([], {}), {}, null)),
            (this.rawUrlTree = this.currentUrlTree),
            (this.browserUrlTree = this.currentUrlTree),
            (this.configLoader = new md(
              l,
              i,
              e => this.triggerEvent(new pc(e)),
              e => this.triggerEvent(new gc(e))
            )),
            (this.routerState = ch(
              this.currentUrlTree,
              this.rootComponentType
            )),
            (this.transitions = new Xo({
              id: 0,
              currentUrlTree: this.currentUrlTree,
              currentRawUrl: this.currentUrlTree,
              extractedUrl: this.urlHandlingStrategy.extract(
                this.currentUrlTree
              ),
              urlAfterRedirects: this.urlHandlingStrategy.extract(
                this.currentUrlTree
              ),
              rawUrl: this.currentUrlTree,
              extras: {},
              resolve: null,
              reject: null,
              promise: Promise.resolve(!0),
              source: 'imperative',
              restoredState: null,
              currentSnapshot: this.routerState.snapshot,
              targetSnapshot: null,
              currentRouterState: this.routerState,
              targetRouterState: null,
              guards: { canActivateChecks: [], canDeactivateChecks: [] },
              guardsResult: null,
            })),
            (this.navigations = this.setupNavigations(this.transitions)),
            this.processNavigations();
        }
        setupNavigations(e) {
          const t = this.events;
          return e.pipe(
            oa(e => 0 !== e.id),
            H(e =>
              Object.assign({}, e, {
                extractedUrl: this.urlHandlingStrategy.extract(e.rawUrl),
              })
            ),
            Pa(e => {
              let n = !1,
                r = !1;
              return Yo(e).pipe(
                fa(e => {
                  this.currentNavigation = {
                    id: e.id,
                    initialUrl: e.currentRawUrl,
                    extractedUrl: e.extractedUrl,
                    trigger: e.source,
                    extras: e.extras,
                    previousNavigation: this.lastSuccessfulNavigation
                      ? Object.assign({}, this.lastSuccessfulNavigation, {
                          previousNavigation: null,
                        })
                      : null,
                  };
                }),
                Pa(e => {
                  const n =
                    !this.navigated ||
                    e.extractedUrl.toString() !==
                      this.browserUrlTree.toString();
                  if (
                    ('reload' === this.onSameUrlNavigation || n) &&
                    this.urlHandlingStrategy.shouldProcessUrl(e.rawUrl)
                  )
                    return Yo(e).pipe(
                      Pa(e => {
                        const n = this.transitions.getValue();
                        return (
                          t.next(
                            new sc(
                              e.id,
                              this.serializeUrl(e.extractedUrl),
                              e.source,
                              e.restoredState
                            )
                          ),
                          n !== this.transitions.getValue() ? Qo : [e]
                        );
                      }),
                      Pa(e => Promise.resolve(e)),
                      (function(e, t, n, r) {
                        return function(s) {
                          return s.pipe(
                            Pa(s =>
                              (function(e, t, n, r, s) {
                                return new jh(e, t, n, r, s).apply();
                              })(e, t, n, s.extractedUrl, r).pipe(
                                H(e =>
                                  Object.assign({}, s, { urlAfterRedirects: e })
                                )
                              )
                            )
                          );
                        };
                      })(
                        this.ngModule.injector,
                        this.configLoader,
                        this.urlSerializer,
                        this.config
                      ),
                      fa(e => {
                        this.currentNavigation = Object.assign(
                          {},
                          this.currentNavigation,
                          { finalUrl: e.urlAfterRedirects }
                        );
                      }),
                      (function(e, t, n, r, s) {
                        return function(l) {
                          return l.pipe(
                            W(l =>
                              (function(
                                e,
                                t,
                                n,
                                r,
                                s = 'emptyOnly',
                                l = 'legacy'
                              ) {
                                return new rd(e, t, n, r, s, l).recognize();
                              })(
                                e,
                                t,
                                l.urlAfterRedirects,
                                n(l.urlAfterRedirects),
                                r,
                                s
                              ).pipe(
                                H(e =>
                                  Object.assign({}, l, { targetSnapshot: e })
                                )
                              )
                            )
                          );
                        };
                      })(
                        this.rootComponentType,
                        this.config,
                        e => this.serializeUrl(e),
                        this.paramsInheritanceStrategy,
                        this.relativeLinkResolution
                      ),
                      fa(e => {
                        'eager' === this.urlUpdateStrategy &&
                          (e.extras.skipLocationChange ||
                            this.setBrowserUrl(
                              e.urlAfterRedirects,
                              !!e.extras.replaceUrl,
                              e.id,
                              e.extras.state
                            ),
                          (this.browserUrlTree = e.urlAfterRedirects));
                      }),
                      fa(e => {
                        const n = new ac(
                          e.id,
                          this.serializeUrl(e.extractedUrl),
                          this.serializeUrl(e.urlAfterRedirects),
                          e.targetSnapshot
                        );
                        t.next(n);
                      })
                    );
                  if (
                    n &&
                    this.rawUrlTree &&
                    this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)
                  ) {
                    const {
                        id: n,
                        extractedUrl: r,
                        source: s,
                        restoredState: l,
                        extras: i,
                      } = e,
                      o = new sc(n, this.serializeUrl(r), s, l);
                    t.next(o);
                    const a = ch(r, this.rootComponentType).snapshot;
                    return Yo(
                      Object.assign({}, e, {
                        targetSnapshot: a,
                        urlAfterRedirects: r,
                        extras: Object.assign({}, i, {
                          skipLocationChange: !1,
                          replaceUrl: !1,
                        }),
                      })
                    );
                  }
                  return (
                    (this.rawUrlTree = e.rawUrl),
                    (this.browserUrlTree = e.urlAfterRedirects),
                    e.resolve(null),
                    Qo
                  );
                }),
                dd(e => {
                  const {
                    targetSnapshot: t,
                    id: n,
                    extractedUrl: r,
                    rawUrl: s,
                    extras: { skipLocationChange: l, replaceUrl: i },
                  } = e;
                  return this.hooks.beforePreactivation(t, {
                    navigationId: n,
                    appliedUrlTree: r,
                    rawUrlTree: s,
                    skipLocationChange: !!l,
                    replaceUrl: !!i,
                  });
                }),
                fa(e => {
                  const t = new uc(
                    e.id,
                    this.serializeUrl(e.extractedUrl),
                    this.serializeUrl(e.urlAfterRedirects),
                    e.targetSnapshot
                  );
                  this.triggerEvent(t);
                }),
                H(e =>
                  Object.assign({}, e, {
                    guards: Wh(
                      e.targetSnapshot,
                      e.currentSnapshot,
                      this.rootContexts
                    ),
                  })
                ),
                (function(e, t) {
                  return function(n) {
                    return n.pipe(
                      W(n => {
                        const {
                          targetSnapshot: r,
                          currentSnapshot: s,
                          guards: {
                            canActivateChecks: l,
                            canDeactivateChecks: i,
                          },
                        } = n;
                        return 0 === i.length && 0 === l.length
                          ? Yo(Object.assign({}, n, { guardsResult: !0 }))
                          : (function(e, t, n, r) {
                              return G(e).pipe(
                                W(e =>
                                  (function(e, t, n, r, s) {
                                    const l =
                                      t && t.routeConfig
                                        ? t.routeConfig.canDeactivate
                                        : null;
                                    return l && 0 !== l.length
                                      ? Yo(
                                          l.map(l => {
                                            const i = Zh(l, t, s);
                                            let o;
                                            if (
                                              (function(e) {
                                                return e && Ph(e.canDeactivate);
                                              })(i)
                                            )
                                              o = Mc(
                                                i.canDeactivate(e, t, n, r)
                                              );
                                            else {
                                              if (!Ph(i))
                                                throw new Error(
                                                  'Invalid CanDeactivate guard'
                                                );
                                              o = Mc(i(e, t, n, r));
                                            }
                                            return o.pipe(Oa());
                                          })
                                        ).pipe(Jh())
                                      : Yo(!0);
                                  })(e.component, e.route, n, t, r)
                                ),
                                Oa(e => !0 !== e, !0)
                              );
                            })(i, r, s, e).pipe(
                              W(n =>
                                n &&
                                (function(e) {
                                  return 'boolean' == typeof e;
                                })(n)
                                  ? (function(e, t, n, r) {
                                      return G(t).pipe(
                                        Fa(t =>
                                          G([
                                            Xh(t.route.parent, r),
                                            Yh(t.route, r),
                                            td(e, t.path, n),
                                            ed(e, t.route, n),
                                          ]).pipe(
                                            ia(),
                                            Oa(e => !0 !== e, !0)
                                          )
                                        ),
                                        Oa(e => !0 !== e, !0)
                                      );
                                    })(r, l, e, t)
                                  : Yo(n)
                              ),
                              H(e => Object.assign({}, n, { guardsResult: e }))
                            );
                      })
                    );
                  };
                })(this.ngModule.injector, e => this.triggerEvent(e)),
                fa(e => {
                  if (Dh(e.guardsResult)) {
                    const t = kc(
                      `Redirecting to "${this.serializeUrl(e.guardsResult)}"`
                    );
                    throw ((t.url = e.guardsResult), t);
                  }
                }),
                fa(e => {
                  const t = new cc(
                    e.id,
                    this.serializeUrl(e.extractedUrl),
                    this.serializeUrl(e.urlAfterRedirects),
                    e.targetSnapshot,
                    !!e.guardsResult
                  );
                  this.triggerEvent(t);
                }),
                oa(e => {
                  if (!e.guardsResult) {
                    this.resetUrlToCurrentUrlTree();
                    const n = new ic(
                      e.id,
                      this.serializeUrl(e.extractedUrl),
                      ''
                    );
                    return t.next(n), e.resolve(!1), !1;
                  }
                  return !0;
                }),
                dd(e => {
                  if (e.guards.canActivateChecks.length)
                    return Yo(e).pipe(
                      fa(e => {
                        const t = new hc(
                          e.id,
                          this.serializeUrl(e.extractedUrl),
                          this.serializeUrl(e.urlAfterRedirects),
                          e.targetSnapshot
                        );
                        this.triggerEvent(t);
                      }),
                      (function(e, t) {
                        return function(n) {
                          return n.pipe(
                            W(n => {
                              const {
                                targetSnapshot: r,
                                guards: { canActivateChecks: s },
                              } = n;
                              return s.length
                                ? G(s).pipe(
                                    Fa(n =>
                                      (function(e, t, n, r) {
                                        return (function(e, t, n, r) {
                                          const s = Object.keys(e);
                                          if (0 === s.length) return Yo({});
                                          if (1 === s.length) {
                                            const l = s[0];
                                            return hd(e[l], t, n, r).pipe(
                                              H(e => ({ [l]: e }))
                                            );
                                          }
                                          const l = {};
                                          return G(s)
                                            .pipe(
                                              W(s =>
                                                hd(e[s], t, n, r).pipe(
                                                  H(e => ((l[s] = e), e))
                                                )
                                              )
                                            )
                                            .pipe(
                                              xa(),
                                              H(() => l)
                                            );
                                        })(e._resolve, e, t, r).pipe(
                                          H(
                                            t => (
                                              (e._resolvedData = t),
                                              (e.data = Object.assign(
                                                {},
                                                e.data,
                                                dh(e, n).resolve
                                              )),
                                              null
                                            )
                                          )
                                        );
                                      })(n.route, r, e, t)
                                    ),
                                    (function(e, t) {
                                      return arguments.length >= 2
                                        ? function(n) {
                                            return b(Ma(e, t), da(1), _a(t))(n);
                                          }
                                        : function(t) {
                                            return b(
                                              Ma((t, n, r) => e(t, n, r + 1)),
                                              da(1)
                                            )(t);
                                          };
                                    })((e, t) => e),
                                    H(e => n)
                                  )
                                : Yo(n);
                            })
                          );
                        };
                      })(
                        this.paramsInheritanceStrategy,
                        this.ngModule.injector
                      ),
                      fa(e => {
                        const t = new dc(
                          e.id,
                          this.serializeUrl(e.extractedUrl),
                          this.serializeUrl(e.urlAfterRedirects),
                          e.targetSnapshot
                        );
                        this.triggerEvent(t);
                      })
                    );
                }),
                dd(e => {
                  const {
                    targetSnapshot: t,
                    id: n,
                    extractedUrl: r,
                    rawUrl: s,
                    extras: { skipLocationChange: l, replaceUrl: i },
                  } = e;
                  return this.hooks.afterPreactivation(t, {
                    navigationId: n,
                    appliedUrlTree: r,
                    rawUrlTree: s,
                    skipLocationChange: !!l,
                    replaceUrl: !!i,
                  });
                }),
                H(e => {
                  const t = (function(e, t, n) {
                    const r = (function e(t, n, r) {
                      if (r && t.shouldReuseRoute(n.value, r.value.snapshot)) {
                        const s = r.value;
                        s._futureSnapshot = n.value;
                        const l = (function(t, n, r) {
                          return n.children.map(n => {
                            for (const s of r.children)
                              if (t.shouldReuseRoute(s.value.snapshot, n.value))
                                return e(t, n, s);
                            return e(t, n);
                          });
                        })(t, n, r);
                        return new oh(s, l);
                      }
                      {
                        const r = t.retrieve(n.value);
                        if (r) {
                          const e = r.route;
                          return (
                            (function e(t, n) {
                              if (t.value.routeConfig !== n.value.routeConfig)
                                throw new Error(
                                  'Cannot reattach ActivatedRouteSnapshot created from a different route'
                                );
                              if (t.children.length !== n.children.length)
                                throw new Error(
                                  'Cannot reattach ActivatedRouteSnapshot with a different number of children'
                                );
                              n.value._futureSnapshot = t.value;
                              for (let r = 0; r < t.children.length; ++r)
                                e(t.children[r], n.children[r]);
                            })(n, e),
                            e
                          );
                        }
                        {
                          const r = new hh(
                              new Xo((s = n.value).url),
                              new Xo(s.params),
                              new Xo(s.queryParams),
                              new Xo(s.fragment),
                              new Xo(s.data),
                              s.outlet,
                              s.component,
                              s
                            ),
                            l = n.children.map(n => e(t, n));
                          return new oh(r, l);
                        }
                      }
                      var s;
                    })(e, t._root, n ? n._root : void 0);
                    return new uh(r, t);
                  })(
                    this.routeReuseStrategy,
                    e.targetSnapshot,
                    e.currentRouterState
                  );
                  return Object.assign({}, e, { targetRouterState: t });
                }),
                fa(e => {
                  (this.currentUrlTree = e.urlAfterRedirects),
                    (this.rawUrlTree = this.urlHandlingStrategy.merge(
                      this.currentUrlTree,
                      e.rawUrl
                    )),
                    (this.routerState = e.targetRouterState),
                    'deferred' === this.urlUpdateStrategy &&
                      (e.extras.skipLocationChange ||
                        this.setBrowserUrl(
                          this.rawUrlTree,
                          !!e.extras.replaceUrl,
                          e.id,
                          e.extras.state
                        ),
                      (this.browserUrlTree = e.urlAfterRedirects));
                }),
                Oh(this.rootContexts, this.routeReuseStrategy, e =>
                  this.triggerEvent(e)
                ),
                fa({
                  next() {
                    n = !0;
                  },
                  complete() {
                    n = !0;
                  },
                }),
                (function(e) {
                  return t => t.lift(new ja(e));
                })(() => {
                  if (!n && !r) {
                    this.resetUrlToCurrentUrlTree();
                    const n = new ic(
                      e.id,
                      this.serializeUrl(e.extractedUrl),
                      `Navigation ID ${e.id} is not equal to the current navigation id ${this.navigationId}`
                    );
                    t.next(n), e.resolve(!1);
                  }
                  this.currentNavigation = null;
                }),
                Sa(n => {
                  if (
                    ((r = !0),
                    (function(e) {
                      return e && e[Sc];
                    })(n))
                  ) {
                    const r = Dh(n.url);
                    r ||
                      ((this.navigated = !0),
                      this.resetStateAndUrl(
                        e.currentRouterState,
                        e.currentUrlTree,
                        e.rawUrl
                      ));
                    const s = new ic(
                      e.id,
                      this.serializeUrl(e.extractedUrl),
                      n.message
                    );
                    t.next(s), e.resolve(!1), r && this.navigateByUrl(n.url);
                  } else {
                    this.resetStateAndUrl(
                      e.currentRouterState,
                      e.currentUrlTree,
                      e.rawUrl
                    );
                    const r = new oc(
                      e.id,
                      this.serializeUrl(e.extractedUrl),
                      n
                    );
                    t.next(r);
                    try {
                      e.resolve(this.errorHandler(n));
                    } catch (s) {
                      e.reject(s);
                    }
                  }
                  return Qo;
                })
              );
            })
          );
        }
        resetRootComponentType(e) {
          (this.rootComponentType = e),
            (this.routerState.root.component = this.rootComponentType);
        }
        getTransition() {
          const e = this.transitions.value;
          return (e.urlAfterRedirects = this.browserUrlTree), e;
        }
        setTransition(e) {
          this.transitions.next(Object.assign({}, this.getTransition(), e));
        }
        initialNavigation() {
          this.setUpLocationChangeListener(),
            0 === this.navigationId &&
              this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
        }
        setUpLocationChangeListener() {
          this.locationSubscription ||
            (this.locationSubscription = this.location.subscribe(e => {
              let t = this.parseUrl(e.url);
              const n = 'popstate' === e.type ? 'popstate' : 'hashchange',
                r = e.state && e.state.navigationId ? e.state : null;
              setTimeout(() => {
                this.scheduleNavigation(t, n, r, { replaceUrl: !0 });
              }, 0);
            }));
        }
        get url() {
          return this.serializeUrl(this.currentUrlTree);
        }
        getCurrentNavigation() {
          return this.currentNavigation;
        }
        triggerEvent(e) {
          this.events.next(e);
        }
        resetConfig(e) {
          Ac(e),
            (this.config = e.map(Ic)),
            (this.navigated = !1),
            (this.lastSuccessfulId = -1);
        }
        ngOnDestroy() {
          this.dispose();
        }
        dispose() {
          this.locationSubscription &&
            (this.locationSubscription.unsubscribe(),
            (this.locationSubscription = null));
        }
        createUrlTree(e, t = {}) {
          const {
            relativeTo: n,
            queryParams: r,
            fragment: s,
            preserveQueryParams: l,
            queryParamsHandling: i,
            preserveFragment: o,
          } = t;
          nt() &&
            l &&
            console &&
            console.warn &&
            console.warn(
              'preserveQueryParams is deprecated, use queryParamsHandling instead.'
            );
          const a = n || this.routerState.root,
            u = o ? this.currentUrlTree.fragment : s;
          let c = null;
          if (i)
            switch (i) {
              case 'merge':
                c = Object.assign({}, this.currentUrlTree.queryParams, r);
                break;
              case 'preserve':
                c = this.currentUrlTree.queryParams;
                break;
              default:
                c = r || null;
            }
          else c = l ? this.currentUrlTree.queryParams : r || null;
          return (
            null !== c && (c = this.removeEmptyProps(c)),
            (function(e, t, n, r, s) {
              if (0 === n.length) return _h(t.root, t.root, t, r, s);
              const l = (function(e) {
                if ('string' == typeof e[0] && 1 === e.length && '/' === e[0])
                  return new wh(!0, 0, e);
                let t = 0,
                  n = !1;
                const r = e.reduce((e, r, s) => {
                  if ('object' == typeof r && null != r) {
                    if (r.outlets) {
                      const t = {};
                      return (
                        Vc(r.outlets, (e, n) => {
                          t[n] = 'string' == typeof e ? e.split('/') : e;
                        }),
                        [...e, { outlets: t }]
                      );
                    }
                    if (r.segmentPath) return [...e, r.segmentPath];
                  }
                  return 'string' != typeof r
                    ? [...e, r]
                    : 0 === s
                    ? (r.split('/').forEach((r, s) => {
                        (0 == s && '.' === r) ||
                          (0 == s && '' === r
                            ? (n = !0)
                            : '..' === r
                            ? t++
                            : '' != r && e.push(r));
                      }),
                      e)
                    : [...e, r];
                }, []);
                return new wh(n, t, r);
              })(n);
              if (l.toRoot()) return _h(t.root, new Fc([], {}), t, r, s);
              const i = (function(e, t, n) {
                  if (e.isAbsolute) return new Ch(t.root, !0, 0);
                  if (-1 === n.snapshot._lastPathIndex)
                    return new Ch(n.snapshot._urlSegment, !0, 0);
                  const r = bh(e.commands[0]) ? 0 : 1;
                  return (function(e, t, n) {
                    let r = e,
                      s = t,
                      l = n;
                    for (; l > s; ) {
                      if (((l -= s), !(r = r.parent)))
                        throw new Error("Invalid number of '../'");
                      s = r.segments.length;
                    }
                    return new Ch(r, !1, s - l);
                  })(
                    n.snapshot._urlSegment,
                    n.snapshot._lastPathIndex + r,
                    e.numberOfDoubleDots
                  );
                })(l, t, e),
                o = i.processChildren
                  ? kh(i.segmentGroup, i.index, l.commands)
                  : Sh(i.segmentGroup, i.index, l.commands);
              return _h(i.segmentGroup, o, t, r, s);
            })(a, this.currentUrlTree, e, c, u)
          );
        }
        navigateByUrl(e, t = { skipLocationChange: !1 }) {
          nt() &&
            this.isNgZoneEnabled &&
            !cl.isInAngularZone() &&
            this.console.warn(
              "Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?"
            );
          const n = Dh(e) ? e : this.parseUrl(e),
            r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
          return this.scheduleNavigation(r, 'imperative', null, t);
        }
        navigate(e, t = { skipLocationChange: !1 }) {
          return (
            (function(e) {
              for (let t = 0; t < e.length; t++) {
                const n = e[t];
                if (null == n)
                  throw new Error(
                    `The requested path contains ${n} segment at index ${t}`
                  );
              }
            })(e),
            this.navigateByUrl(this.createUrlTree(e, t), t)
          );
        }
        serializeUrl(e) {
          return this.urlSerializer.serialize(e);
        }
        parseUrl(e) {
          let t;
          try {
            t = this.urlSerializer.parse(e);
          } catch (n) {
            t = this.malformedUriErrorHandler(n, this.urlSerializer, e);
          }
          return t;
        }
        isActive(e, t) {
          if (Dh(e)) return Lc(this.currentUrlTree, e, t);
          const n = this.parseUrl(e);
          return Lc(this.currentUrlTree, n, t);
        }
        removeEmptyProps(e) {
          return Object.keys(e).reduce((t, n) => {
            const r = e[n];
            return null != r && (t[n] = r), t;
          }, {});
        }
        processNavigations() {
          this.navigations.subscribe(
            e => {
              (this.navigated = !0),
                (this.lastSuccessfulId = e.id),
                this.events.next(
                  new lc(
                    e.id,
                    this.serializeUrl(e.extractedUrl),
                    this.serializeUrl(this.currentUrlTree)
                  )
                ),
                (this.lastSuccessfulNavigation = this.currentNavigation),
                (this.currentNavigation = null),
                e.resolve(!0);
            },
            e => {
              this.console.warn('Unhandled Navigation Error: ');
            }
          );
        }
        scheduleNavigation(e, t, n, r) {
          const s = this.getTransition();
          if (
            s &&
            'imperative' !== t &&
            'imperative' === s.source &&
            s.rawUrl.toString() === e.toString()
          )
            return Promise.resolve(!0);
          if (
            s &&
            'hashchange' == t &&
            'popstate' === s.source &&
            s.rawUrl.toString() === e.toString()
          )
            return Promise.resolve(!0);
          if (
            s &&
            'popstate' == t &&
            'hashchange' === s.source &&
            s.rawUrl.toString() === e.toString()
          )
            return Promise.resolve(!0);
          let l = null,
            i = null;
          const o = new Promise((e, t) => {
              (l = e), (i = t);
            }),
            a = ++this.navigationId;
          return (
            this.setTransition({
              id: a,
              source: t,
              restoredState: n,
              currentUrlTree: this.currentUrlTree,
              currentRawUrl: this.rawUrlTree,
              rawUrl: e,
              extras: r,
              resolve: l,
              reject: i,
              promise: o,
              currentSnapshot: this.routerState.snapshot,
              currentRouterState: this.routerState,
            }),
            o.catch(e => Promise.reject(e))
          );
        }
        setBrowserUrl(e, t, n, r) {
          const s = this.urlSerializer.serialize(e);
          (r = r || {}),
            this.location.isCurrentPathEqualTo(s) || t
              ? this.location.replaceState(
                  s,
                  '',
                  Object.assign({}, r, { navigationId: n })
                )
              : this.location.go(
                  s,
                  '',
                  Object.assign({}, r, { navigationId: n })
                );
        }
        resetStateAndUrl(e, t, n) {
          (this.routerState = e),
            (this.currentUrlTree = t),
            (this.rawUrlTree = this.urlHandlingStrategy.merge(
              this.currentUrlTree,
              n
            )),
            this.resetUrlToCurrentUrlTree();
        }
        resetUrlToCurrentUrlTree() {
          this.location.replaceState(
            this.urlSerializer.serialize(this.rawUrlTree),
            '',
            { navigationId: this.lastSuccessfulId }
          );
        }
      }
      class xd {
        constructor(e, t, n, r, s) {
          (this.router = e),
            (this.route = t),
            (this.commands = []),
            null == n && r.setAttribute(s.nativeElement, 'tabindex', '0');
        }
        set routerLink(e) {
          this.commands = null != e ? (Array.isArray(e) ? e : [e]) : [];
        }
        set preserveQueryParams(e) {
          nt() &&
            console &&
            console.warn &&
            console.warn(
              'preserveQueryParams is deprecated!, use queryParamsHandling instead.'
            ),
            (this.preserve = e);
        }
        onClick() {
          const e = {
            skipLocationChange: kd(this.skipLocationChange),
            replaceUrl: kd(this.replaceUrl),
          };
          return this.router.navigateByUrl(this.urlTree, e), !0;
        }
        get urlTree() {
          return this.router.createUrlTree(this.commands, {
            relativeTo: this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            preserveQueryParams: kd(this.preserve),
            queryParamsHandling: this.queryParamsHandling,
            preserveFragment: kd(this.preserveFragment),
          });
        }
      }
      class Sd {
        constructor(e, t, n) {
          (this.router = e),
            (this.route = t),
            (this.locationStrategy = n),
            (this.commands = []),
            (this.subscription = e.events.subscribe(e => {
              e instanceof lc && this.updateTargetUrlAndHref();
            }));
        }
        set routerLink(e) {
          this.commands = null != e ? (Array.isArray(e) ? e : [e]) : [];
        }
        set preserveQueryParams(e) {
          nt() &&
            console &&
            console.warn &&
            console.warn(
              'preserveQueryParams is deprecated, use queryParamsHandling instead.'
            ),
            (this.preserve = e);
        }
        ngOnChanges(e) {
          this.updateTargetUrlAndHref();
        }
        ngOnDestroy() {
          this.subscription.unsubscribe();
        }
        onClick(e, t, n, r) {
          if (0 !== e || t || n || r) return !0;
          if ('string' == typeof this.target && '_self' != this.target)
            return !0;
          const s = {
            skipLocationChange: kd(this.skipLocationChange),
            replaceUrl: kd(this.replaceUrl),
            state: this.state,
          };
          return this.router.navigateByUrl(this.urlTree, s), !1;
        }
        updateTargetUrlAndHref() {
          this.href = this.locationStrategy.prepareExternalUrl(
            this.router.serializeUrl(this.urlTree)
          );
        }
        get urlTree() {
          return this.router.createUrlTree(this.commands, {
            relativeTo: this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            preserveQueryParams: kd(this.preserve),
            queryParamsHandling: this.queryParamsHandling,
            preserveFragment: kd(this.preserveFragment),
          });
        }
      }
      function kd(e) {
        return '' === e || !!e;
      }
      class Ed {
        constructor(e, t, n, r, s) {
          (this.router = e),
            (this.element = t),
            (this.renderer = n),
            (this.link = r),
            (this.linkWithHref = s),
            (this.classes = []),
            (this.isActive = !1),
            (this.routerLinkActiveOptions = { exact: !1 }),
            (this.subscription = e.events.subscribe(e => {
              e instanceof lc && this.update();
            }));
        }
        ngAfterContentInit() {
          this.links.changes.subscribe(e => this.update()),
            this.linksWithHrefs.changes.subscribe(e => this.update()),
            this.update();
        }
        set routerLinkActive(e) {
          const t = Array.isArray(e) ? e : e.split(' ');
          this.classes = t.filter(e => !!e);
        }
        ngOnChanges(e) {
          this.update();
        }
        ngOnDestroy() {
          this.subscription.unsubscribe();
        }
        update() {
          this.links &&
            this.linksWithHrefs &&
            this.router.navigated &&
            Promise.resolve().then(() => {
              const e = this.hasActiveLinks();
              this.isActive !== e &&
                ((this.isActive = e),
                this.classes.forEach(t => {
                  e
                    ? this.renderer.addClass(this.element.nativeElement, t)
                    : this.renderer.removeClass(this.element.nativeElement, t);
                }));
            });
        }
        isLinkActive(e) {
          return t => e.isActive(t.urlTree, this.routerLinkActiveOptions.exact);
        }
        hasActiveLinks() {
          const e = this.isLinkActive(this.router);
          return (
            (this.link && e(this.link)) ||
            (this.linkWithHref && e(this.linkWithHref)) ||
            this.links.some(e) ||
            this.linksWithHrefs.some(e)
          );
        }
      }
      class Td {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new Ad()),
            (this.attachRef = null);
        }
      }
      class Ad {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(e, t) {
          const n = this.getOrCreateContext(e);
          (n.outlet = t), this.contexts.set(e, n);
        }
        onChildOutletDestroyed(e) {
          const t = this.getContext(e);
          t && (t.outlet = null);
        }
        onOutletDeactivated() {
          const e = this.contexts;
          return (this.contexts = new Map()), e;
        }
        onOutletReAttached(e) {
          this.contexts = e;
        }
        getOrCreateContext(e) {
          let t = this.getContext(e);
          return t || ((t = new Td()), this.contexts.set(e, t)), t;
        }
        getContext(e) {
          return this.contexts.get(e) || null;
        }
      }
      class Nd {
        constructor(e, t, n, r, s) {
          (this.parentContexts = e),
            (this.location = t),
            (this.resolver = n),
            (this.changeDetector = s),
            (this.activated = null),
            (this._activatedRoute = null),
            (this.activateEvents = new Ds()),
            (this.deactivateEvents = new Ds()),
            (this.name = r || wc),
            e.onChildOutletCreated(this.name, this);
        }
        ngOnDestroy() {
          this.parentContexts.onChildOutletDestroyed(this.name);
        }
        ngOnInit() {
          if (!this.activated) {
            const e = this.parentContexts.getContext(this.name);
            e &&
              e.route &&
              (e.attachRef
                ? this.attach(e.attachRef, e.route)
                : this.activateWith(e.route, e.resolver || null));
          }
        }
        get isActivated() {
          return !!this.activated;
        }
        get component() {
          if (!this.activated) throw new Error('Outlet is not activated');
          return this.activated.instance;
        }
        get activatedRoute() {
          if (!this.activated) throw new Error('Outlet is not activated');
          return this._activatedRoute;
        }
        get activatedRouteData() {
          return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
        }
        detach() {
          if (!this.activated) throw new Error('Outlet is not activated');
          this.location.detach();
          const e = this.activated;
          return (this.activated = null), (this._activatedRoute = null), e;
        }
        attach(e, t) {
          (this.activated = e),
            (this._activatedRoute = t),
            this.location.insert(e.hostView);
        }
        deactivate() {
          if (this.activated) {
            const e = this.component;
            this.activated.destroy(),
              (this.activated = null),
              (this._activatedRoute = null),
              this.deactivateEvents.emit(e);
          }
        }
        activateWith(e, t) {
          if (this.isActivated)
            throw new Error('Cannot activate an already activated outlet');
          this._activatedRoute = e;
          const n = (t = t || this.resolver).resolveComponentFactory(
              e._futureSnapshot.routeConfig.component
            ),
            r = this.parentContexts.getOrCreateContext(this.name).children,
            s = new Od(e, r, this.location.injector);
          (this.activated = this.location.createComponent(
            n,
            this.location.length,
            s
          )),
            this.changeDetector.markForCheck(),
            this.activateEvents.emit(this.activated.instance);
        }
      }
      class Od {
        constructor(e, t, n) {
          (this.route = e), (this.childContexts = t), (this.parent = n);
        }
        get(e, t) {
          return e === hh
            ? this.route
            : e === Ad
            ? this.childContexts
            : this.parent.get(e, t);
        }
      }
      class Id {}
      class Rd {
        preload(e, t) {
          return t().pipe(Sa(() => Yo(null)));
        }
      }
      class Pd {
        preload(e, t) {
          return Yo(null);
        }
      }
      class Dd {
        constructor(e, t, n, r, s) {
          (this.router = e),
            (this.injector = r),
            (this.preloadingStrategy = s),
            (this.loader = new md(
              t,
              n,
              t => e.triggerEvent(new pc(t)),
              t => e.triggerEvent(new gc(t))
            ));
        }
        setUpPreloading() {
          this.subscription = this.router.events
            .pipe(
              oa(e => e instanceof lc),
              Fa(() => this.preload())
            )
            .subscribe(() => {});
        }
        preload() {
          const e = this.injector.get($e);
          return this.processRoutes(e, this.router.config);
        }
        ngOnDestroy() {
          this.subscription.unsubscribe();
        }
        processRoutes(e, t) {
          const n = [];
          for (const r of t)
            if (r.loadChildren && !r.canLoad && r._loadedConfig) {
              const e = r._loadedConfig;
              n.push(this.processRoutes(e.module, e.routes));
            } else
              r.loadChildren && !r.canLoad
                ? n.push(this.preloadConfig(e, r))
                : r.children && n.push(this.processRoutes(e, r.children));
          return G(n).pipe(
            J(),
            H(e => void 0)
          );
        }
        preloadConfig(e, t) {
          return this.preloadingStrategy.preload(t, () =>
            this.loader
              .load(e.injector, t)
              .pipe(
                W(
                  e => (
                    (t._loadedConfig = e),
                    this.processRoutes(e.module, e.routes)
                  )
                )
              )
          );
        }
      }
      class Vd {
        constructor(e, t, n = {}) {
          (this.router = e),
            (this.viewportScroller = t),
            (this.options = n),
            (this.lastId = 0),
            (this.lastSource = 'imperative'),
            (this.restoredId = 0),
            (this.store = {}),
            (n.scrollPositionRestoration =
              n.scrollPositionRestoration || 'disabled'),
            (n.anchorScrolling = n.anchorScrolling || 'disabled');
        }
        init() {
          'disabled' !== this.options.scrollPositionRestoration &&
            this.viewportScroller.setHistoryScrollRestoration('manual'),
            (this.routerEventsSubscription = this.createScrollEvents()),
            (this.scrollEventsSubscription = this.consumeScrollEvents());
        }
        createScrollEvents() {
          return this.router.events.subscribe(e => {
            e instanceof sc
              ? ((this.store[
                  this.lastId
                ] = this.viewportScroller.getScrollPosition()),
                (this.lastSource = e.navigationTrigger),
                (this.restoredId = e.restoredState
                  ? e.restoredState.navigationId
                  : 0))
              : e instanceof lc &&
                ((this.lastId = e.id),
                this.scheduleScrollEvent(
                  e,
                  this.router.parseUrl(e.urlAfterRedirects).fragment
                ));
          });
        }
        consumeScrollEvents() {
          return this.router.events.subscribe(e => {
            e instanceof bc &&
              (e.position
                ? 'top' === this.options.scrollPositionRestoration
                  ? this.viewportScroller.scrollToPosition([0, 0])
                  : 'enabled' === this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition(e.position)
                : e.anchor && 'enabled' === this.options.anchorScrolling
                ? this.viewportScroller.scrollToAnchor(e.anchor)
                : 'disabled' !== this.options.scrollPositionRestoration &&
                  this.viewportScroller.scrollToPosition([0, 0]));
          });
        }
        scheduleScrollEvent(e, t) {
          this.router.triggerEvent(
            new bc(
              e,
              'popstate' === this.lastSource
                ? this.store[this.restoredId]
                : null,
              t
            )
          );
        }
        ngOnDestroy() {
          this.routerEventsSubscription &&
            this.routerEventsSubscription.unsubscribe(),
            this.scrollEventsSubscription &&
              this.scrollEventsSubscription.unsubscribe();
        }
      }
      const Md = new ke('ROUTER_CONFIGURATION'),
        Ld = new ke('ROUTER_FORROOT_GUARD'),
        Ud = [
          No,
          { provide: zc, useClass: Bc },
          {
            provide: Cd,
            useFactory: qd,
            deps: [
              Ol,
              zc,
              Ad,
              No,
              Dt,
              Rl,
              Xs,
              fd,
              Md,
              [yd, new ae()],
              [pd, new ae()],
            ],
          },
          Ad,
          { provide: hh, useFactory: Gd, deps: [Cd] },
          { provide: Rl, useClass: Ll },
          Dd,
          Pd,
          Rd,
          { provide: Md, useValue: { enableTracing: !1 } },
        ];
      function Fd() {
        return new kl('Router', Cd);
      }
      class jd {
        constructor(e, t) {}
        static forRoot(e, t) {
          return {
            ngModule: jd,
            providers: [
              Ud,
              Bd(e),
              { provide: Ld, useFactory: zd, deps: [[Cd, new ae(), new ce()]] },
              { provide: Md, useValue: t || {} },
              {
                provide: To,
                useFactory: Hd,
                deps: [ko, [new oe(Ao), new ae()], Md],
              },
              { provide: Vd, useFactory: $d, deps: [Cd, Wo, Md] },
              {
                provide: Id,
                useExisting:
                  t && t.preloadingStrategy ? t.preloadingStrategy : Pd,
              },
              { provide: kl, multi: !0, useFactory: Fd },
              [
                Wd,
                { provide: Ls, multi: !0, useFactory: Zd, deps: [Wd] },
                { provide: Kd, useFactory: Qd, deps: [Wd] },
                { provide: Bs, multi: !0, useExisting: Kd },
              ],
            ],
          };
        }
        static forChild(e) {
          return { ngModule: jd, providers: [Bd(e)] };
        }
      }
      function $d(e, t, n) {
        return n.scrollOffset && t.setOffset(n.scrollOffset), new Vd(e, t, n);
      }
      function Hd(e, t, n = {}) {
        return n.useHash ? new Io(e, t) : new Ro(e, t);
      }
      function zd(e) {
        if (e)
          throw new Error(
            'RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.'
          );
        return 'guarded';
      }
      function Bd(e) {
        return [
          { provide: zt, multi: !0, useValue: e },
          { provide: fd, multi: !0, useValue: e },
        ];
      }
      function qd(e, t, n, r, s, l, i, o, a = {}, u, c) {
        const h = new Cd(null, t, n, r, s, l, i, Pc(o));
        if (
          (u && (h.urlHandlingStrategy = u),
          c && (h.routeReuseStrategy = c),
          a.errorHandler && (h.errorHandler = a.errorHandler),
          a.malformedUriErrorHandler &&
            (h.malformedUriErrorHandler = a.malformedUriErrorHandler),
          a.enableTracing)
        ) {
          const e = za();
          h.events.subscribe(t => {
            e.logGroup(`Router Event: ${t.constructor.name}`),
              e.log(t.toString()),
              e.log(t),
              e.logGroupEnd();
          });
        }
        return (
          a.onSameUrlNavigation &&
            (h.onSameUrlNavigation = a.onSameUrlNavigation),
          a.paramsInheritanceStrategy &&
            (h.paramsInheritanceStrategy = a.paramsInheritanceStrategy),
          a.urlUpdateStrategy && (h.urlUpdateStrategy = a.urlUpdateStrategy),
          a.relativeLinkResolution &&
            (h.relativeLinkResolution = a.relativeLinkResolution),
          h
        );
      }
      function Gd(e) {
        return e.routerState.root;
      }
      class Wd {
        constructor(e) {
          (this.injector = e),
            (this.initNavigation = !1),
            (this.resultOfPreactivationDone = new T());
        }
        appInitializer() {
          return this.injector.get(Eo, Promise.resolve(null)).then(() => {
            let e = null;
            const t = new Promise(t => (e = t)),
              n = this.injector.get(Cd),
              r = this.injector.get(Md);
            if (this.isLegacyDisabled(r) || this.isLegacyEnabled(r)) e(!0);
            else if ('disabled' === r.initialNavigation)
              n.setUpLocationChangeListener(), e(!0);
            else {
              if ('enabled' !== r.initialNavigation)
                throw new Error(
                  `Invalid initialNavigation options: '${r.initialNavigation}'`
                );
              (n.hooks.afterPreactivation = () =>
                this.initNavigation
                  ? Yo(null)
                  : ((this.initNavigation = !0),
                    e(!0),
                    this.resultOfPreactivationDone)),
                n.initialNavigation();
            }
            return t;
          });
        }
        bootstrapListener(e) {
          const t = this.injector.get(Md),
            n = this.injector.get(Dd),
            r = this.injector.get(Vd),
            s = this.injector.get(Cd),
            l = this.injector.get(Ol);
          e === l.components[0] &&
            (this.isLegacyEnabled(t)
              ? s.initialNavigation()
              : this.isLegacyDisabled(t) && s.setUpLocationChangeListener(),
            n.setUpPreloading(),
            r.init(),
            s.resetRootComponentType(l.componentTypes[0]),
            this.resultOfPreactivationDone.next(null),
            this.resultOfPreactivationDone.complete());
        }
        isLegacyEnabled(e) {
          return (
            'legacy_enabled' === e.initialNavigation ||
            !0 === e.initialNavigation ||
            void 0 === e.initialNavigation
          );
        }
        isLegacyDisabled(e) {
          return (
            'legacy_disabled' === e.initialNavigation ||
            !1 === e.initialNavigation
          );
        }
      }
      function Zd(e) {
        return e.appInitializer.bind(e);
      }
      function Qd(e) {
        return e.bootstrapListener.bind(e);
      }
      const Kd = new ke('Router Initializer');
      var Jd = tr({ encapsulation: 2, styles: [], data: {} });
      function Yd(e) {
        return fi(
          0,
          [
            (e()(),
            Yl(
              0,
              16777216,
              null,
              null,
              1,
              'router-outlet',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            us(1, 212992, null, 0, Nd, [Ad, Mn, ln, [8, null], Ot], null, null),
          ],
          function(e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      function Xd(e) {
        return fi(
          0,
          [
            (e()(),
            Yl(
              0,
              0,
              null,
              null,
              1,
              'ng-component',
              [],
              null,
              null,
              null,
              Yd,
              Jd
            )),
            us(1, 49152, null, 0, _c, [], null, null),
          ],
          null,
          null
        );
      }
      var ep = Fr('ng-component', _c, Xd, {}, {}, []),
        tp = n('DlQD');
      class np {
        transform(e, t) {
          return 'string' != typeof e
            ? (console.error(
                `LanguagePipe has been invoked with an invalid value type [${e}]`
              ),
              e)
            : 'string' != typeof t
            ? (console.error(
                `LanguagePipe has been invoked with an invalid parameter [${t}]`
              ),
              e)
            : '```' + t + '\n' + e + '\n```';
        }
      }
      class rp {}
      class sp extends tp.Renderer {}
      const lp =
          '[ngx-markdown When using the [katex] attribute you *have to* include KaTeX files to `angular.json` or use imports. See README for more information',
        ip =
          '[ngx-markdown] When using the [src] attribute you *have to* pass the `HttpClient` as a parameter of the `forRoot` method. See README for more information';
      class op {
        constructor(e, t, n, r) {
          (this.platform = e),
            (this.http = t),
            (this.domSanitizer = n),
            (this.options = r);
        }
        get options() {
          return this._options;
        }
        set options(e) {
          this._options = Object.assign(
            {},
            { renderer: new sp() },
            this._options,
            e
          );
        }
        get renderer() {
          return this.options.renderer;
        }
        set renderer(e) {
          this.options.renderer = e;
        }
        compile(e, t = !1, n = this.options) {
          let r = this.trimIndentation(e);
          r = t ? this.decodeHtml(r) : r;
          const s = Object(tp.parse)(r, n);
          return n.sanitize && !n.sanitizer
            ? this.domSanitizer.sanitize(St.HTML, s)
            : s;
        }
        getSource(e) {
          if (!this.http) throw new Error(ip);
          return this.http
            .get(e, { responseType: 'text' })
            .pipe(H(t => this.handleExtension(e, t)));
        }
        highlight(e) {
          if (Go(this.platform) && 'undefined' != typeof Prism) {
            e || (e = document);
            const t = e.querySelectorAll('pre code:not([class*="language-"])');
            Array.prototype.forEach.call(t, e =>
              e.classList.add('language-none')
            ),
              Prism.highlightAllUnder(e);
          }
        }
        renderKatex(e, t) {
          if ('undefined' == typeof katex || void 0 === katex.renderToString)
            throw new Error(lp);
          return e.replace(/\$([^\s][^$]*?[^\s])\$/gm, (e, n) =>
            katex.renderToString(n, t)
          );
        }
        decodeHtml(e) {
          if (Go(this.platform)) {
            const t = document.createElement('textarea');
            return (t.innerHTML = e), t.value;
          }
          return e;
        }
        handleExtension(e, t) {
          const n = e
            ? e
                .split('?')[0]
                .split('.')
                .splice(-1)
                .join()
            : null;
          return 'md' !== n ? '```' + n + '\n' + t + '\n```' : t;
        }
        trimIndentation(e) {
          if (!e) return '';
          let t;
          return e
            .split('\n')
            .map(e => {
              let n = t;
              return (
                e.length > 0 &&
                  (n = isNaN(n)
                    ? e.search(/\S|$/)
                    : Math.min(e.search(/\S|$/), n)),
                isNaN(t) && (t = n),
                n ? e.substring(n) : e
              );
            })
            .join('\n');
        }
      }
      const ap = {
        LineHighlight: 'line-highlight',
        LineNumbers: 'line-numbers',
      };
      class up {
        constructor(e, t) {
          (this.element = e),
            (this.markdownService = t),
            (this.error = new Ds()),
            (this.load = new Ds()),
            (this._katex = !1),
            (this._lineHighlight = !1),
            (this._lineNumbers = !1);
        }
        get katex() {
          return this._katex;
        }
        set katex(e) {
          this._katex = this.coerceBooleanProperty(e);
        }
        get lineNumbers() {
          return this._lineNumbers;
        }
        set lineNumbers(e) {
          this._lineNumbers = this.coerceBooleanProperty(e);
        }
        get lineHighlight() {
          return this._lineHighlight;
        }
        set lineHighlight(e) {
          this._lineHighlight = this.coerceBooleanProperty(e);
        }
        ngOnChanges() {
          null == this.data
            ? null == this.src || this.handleSrc()
            : this.handleData();
        }
        ngAfterViewInit() {
          this.data || this.src || this.handleTransclusion();
        }
        render(e, t = !1) {
          let n = this.markdownService.compile(e, t);
          (n = this.katex
            ? this.markdownService.renderKatex(n, this.katexOptions)
            : n),
            (this.element.nativeElement.innerHTML = n),
            this.handlePlugins(),
            this.markdownService.highlight(this.element.nativeElement);
        }
        coerceBooleanProperty(e) {
          return null != e && 'false' !== `${e}`;
        }
        handleData() {
          this.render(this.data);
        }
        handleSrc() {
          this.markdownService.getSource(this.src).subscribe(
            e => {
              this.render(e), this.load.emit(e);
            },
            e => this.error.emit(e)
          );
        }
        handleTransclusion() {
          this.render(this.element.nativeElement.innerHTML, !0);
        }
        handlePlugins() {
          this.lineHighlight &&
            (this.setPluginClass(this.element.nativeElement, ap.LineHighlight),
            this.setPluginOptions(this.element.nativeElement, {
              dataLine: this.line,
              dataLineOffset: this.lineOffset,
            })),
            this.lineNumbers &&
              (this.setPluginClass(this.element.nativeElement, ap.LineNumbers),
              this.setPluginOptions(this.element.nativeElement, {
                dataStart: this.start,
              }));
        }
        setPluginClass(e, t) {
          const n = e.querySelectorAll('pre');
          for (let r = 0; r < n.length; r++) {
            const e = t instanceof Array ? t : [t];
            n.item(r).classList.add(...e);
          }
        }
        setPluginOptions(e, t) {
          const n = e.querySelectorAll('pre');
          for (let r = 0; r < n.length; r++)
            Object.keys(t).forEach(e => {
              const s = t[e];
              if (s) {
                const t = this.toLispCase(e);
                n.item(r).setAttribute(t, s.toString());
              }
            });
        }
        toLispCase(e) {
          const t = e.match(/([A-Z])/g);
          if (!t) return e;
          let n = e.toString();
          for (let r = 0, s = t.length; r < s; r++)
            n = n.replace(new RegExp(t[r]), '-' + t[r].toLowerCase());
          return '-' === n.slice(0, 1) && (n = n.slice(1)), n;
        }
      }
      const cp = {
        provide: rp,
        useValue: {
          gfm: !0,
          tables: !0,
          breaks: !1,
          pedantic: !1,
          sanitize: !1,
          smartLists: !0,
          smartypants: !1,
        },
      };
      class hp {
        static forRoot(e) {
          return {
            ngModule: hp,
            providers: [
              op,
              (e && e.loader) || [],
              (e && e.markedOptions) || cp,
            ],
          };
        }
        static forChild() {
          return { ngModule: hp };
        }
      }
      var dp = tr({ encapsulation: 2, styles: [], data: {} });
      function pp(e) {
        return fi(
          0,
          [
            {
              nodeIndex: -1,
              parent: null,
              renderParent: null,
              bindingIndex: -1,
              outputIndex: -1,
              checkIndex: -1,
              flags: 8,
              childFlags: 0,
              directChildFlags: 0,
              childMatchedQueries: 0,
              matchedQueries: {},
              matchedQueryIds: 0,
              references: {},
              ngContentIndex: null,
              childCount: 0,
              bindings: [],
              bindingFlags: 0,
              outputs: [],
              element: null,
              provider: null,
              text: null,
              query: null,
              ngContent: { index: 0 },
            },
          ],
          null,
          null
        );
      }
      class gp {
        constructor() {
          this.underConstruction = 'UnderConstruction // getting there slowly';
        }
        ngOnInit() {}
      }
      var fp = tr({ encapsulation: 0, styles: [['']], data: {} });
      function mp(e) {
        return fi(
          0,
          [
            cs(0, np, []),
            (e()(),
            Yl(
              1,
              0,
              null,
              null,
              9,
              'div',
              [['class', 'h-64 flex flex-col justify-center align-center']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              2,
              0,
              null,
              null,
              3,
              'h1',
              [['class', 'text-4xl']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['A learning log for '])),
            (e()(),
            Yl(4, 0, null, null, 1, 'mark', [], null, null, null, null, null)),
            (e()(), di(-1, null, ['Angular'])),
            (e()(),
            Yl(
              6,
              0,
              null,
              null,
              1,
              'h4',
              [['class', 'text-2xl']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            di(-1, null, ["Stuff learned/stuff that's tripped me up..."])),
            (e()(),
            Yl(8, 0, null, null, 2, 'markdown', [], null, null, null, pp, dp)),
            us(9, 4767744, null, 0, up, [cn, op], { data: [0, 'data'] }, null),
            ui(10, 2),
          ],
          function(e, t) {
            var n = t.component,
              r = Yn(
                t,
                9,
                0,
                e(t, 10, 0, Kr(t, 0), n.underConstruction, 'javascript')
              );
            e(t, 9, 0, r);
          },
          null
        );
      }
      function yp(e) {
        return fi(
          0,
          [
            (e()(),
            Yl(0, 0, null, null, 1, 'app-home', [], null, null, null, mp, fp)),
            us(1, 114688, null, 0, gp, [], null, null),
          ],
          function(e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      var vp = Fr('app-home', gp, yp, {}, {}, []);
      class bp extends $ {
        constructor(e, t) {
          super(e),
            (this.sources = t),
            (this.completed = 0),
            (this.haveValues = 0);
          const n = t.length;
          this.values = new Array(n);
          for (let r = 0; r < n; r++) {
            const e = j(this, t[r], null, r);
            e && this.add(e);
          }
        }
        notifyNext(e, t, n, r, s) {
          (this.values[n] = t),
            s._hasValue || ((s._hasValue = !0), this.haveValues++);
        }
        notifyComplete(e) {
          const { destination: t, haveValues: n, values: r } = this,
            s = r.length;
          e._hasValue
            ? (this.completed++,
              this.completed === s && (n === s && t.next(r), t.complete()))
            : t.complete();
        }
      }
      const _p = new ke('NgValueAccessor'),
        wp = new ke('CompositionEventMode');
      class Cp {
        constructor(e, t, n) {
          (this._renderer = e),
            (this._elementRef = t),
            (this._compositionMode = n),
            (this.onChange = e => {}),
            (this.onTouched = () => {}),
            (this._composing = !1),
            null == this._compositionMode &&
              (this._compositionMode = !(function() {
                const e = za() ? za().getUserAgent() : '';
                return /android (\d+)/.test(e.toLowerCase());
              })());
        }
        writeValue(e) {
          this._renderer.setProperty(
            this._elementRef.nativeElement,
            'value',
            null == e ? '' : e
          );
        }
        registerOnChange(e) {
          this.onChange = e;
        }
        registerOnTouched(e) {
          this.onTouched = e;
        }
        setDisabledState(e) {
          this._renderer.setProperty(
            this._elementRef.nativeElement,
            'disabled',
            e
          );
        }
        _handleInput(e) {
          (!this._compositionMode ||
            (this._compositionMode && !this._composing)) &&
            this.onChange(e);
        }
        _compositionStart() {
          this._composing = !0;
        }
        _compositionEnd(e) {
          (this._composing = !1), this._compositionMode && this.onChange(e);
        }
      }
      class xp {
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        reset(e) {
          this.control && this.control.reset(e);
        }
        hasError(e, t) {
          return !!this.control && this.control.hasError(e, t);
        }
        getError(e, t) {
          return this.control ? this.control.getError(e, t) : null;
        }
      }
      class Sp extends xp {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      function kp() {
        throw new Error('unimplemented');
      }
      class Ep extends xp {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null),
            (this._rawValidators = []),
            (this._rawAsyncValidators = []);
        }
        get validator() {
          return kp();
        }
        get asyncValidator() {
          return kp();
        }
      }
      class Tp {
        constructor(e) {
          this._cd = e;
        }
        get ngClassUntouched() {
          return !!this._cd.control && this._cd.control.untouched;
        }
        get ngClassTouched() {
          return !!this._cd.control && this._cd.control.touched;
        }
        get ngClassPristine() {
          return !!this._cd.control && this._cd.control.pristine;
        }
        get ngClassDirty() {
          return !!this._cd.control && this._cd.control.dirty;
        }
        get ngClassValid() {
          return !!this._cd.control && this._cd.control.valid;
        }
        get ngClassInvalid() {
          return !!this._cd.control && this._cd.control.invalid;
        }
        get ngClassPending() {
          return !!this._cd.control && this._cd.control.pending;
        }
      }
      class Ap extends Tp {
        constructor(e) {
          super(e);
        }
      }
      class Np extends Tp {
        constructor(e) {
          super(e);
        }
      }
      function Op(e) {
        return null == e || 0 === e.length;
      }
      const Ip = new ke('NgValidators'),
        Rp = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class Pp {
        static min(e) {
          return t => {
            if (Op(t.value) || Op(e)) return null;
            const n = parseFloat(t.value);
            return !isNaN(n) && n < e
              ? { min: { min: e, actual: t.value } }
              : null;
          };
        }
        static max(e) {
          return t => {
            if (Op(t.value) || Op(e)) return null;
            const n = parseFloat(t.value);
            return !isNaN(n) && n > e
              ? { max: { max: e, actual: t.value } }
              : null;
          };
        }
        static required(e) {
          return Op(e.value) ? { required: !0 } : null;
        }
        static requiredTrue(e) {
          return !0 === e.value ? null : { required: !0 };
        }
        static email(e) {
          return Op(e.value) ? null : Rp.test(e.value) ? null : { email: !0 };
        }
        static minLength(e) {
          return t => {
            if (Op(t.value)) return null;
            const n = t.value ? t.value.length : 0;
            return n < e
              ? { minlength: { requiredLength: e, actualLength: n } }
              : null;
          };
        }
        static maxLength(e) {
          return t => {
            const n = t.value ? t.value.length : 0;
            return n > e
              ? { maxlength: { requiredLength: e, actualLength: n } }
              : null;
          };
        }
        static pattern(e) {
          if (!e) return Pp.nullValidator;
          let t, n;
          return (
            'string' == typeof e
              ? ((n = ''),
                '^' !== e.charAt(0) && (n += '^'),
                (n += e),
                '$' !== e.charAt(e.length - 1) && (n += '$'),
                (t = new RegExp(n)))
              : ((n = e.toString()), (t = e)),
            e => {
              if (Op(e.value)) return null;
              const r = e.value;
              return t.test(r)
                ? null
                : { pattern: { requiredPattern: n, actualValue: r } };
            }
          );
        }
        static nullValidator(e) {
          return null;
        }
        static compose(e) {
          if (!e) return null;
          const t = e.filter(Dp);
          return 0 == t.length
            ? null
            : function(e) {
                return Mp(
                  (function(e, t) {
                    return t.map(t => t(e));
                  })(e, t)
                );
              };
        }
        static composeAsync(e) {
          if (!e) return null;
          const t = e.filter(Dp);
          return 0 == t.length
            ? null
            : function(e) {
                return (function e(...t) {
                  let n;
                  return (
                    'function' == typeof t[t.length - 1] && (n = t.pop()),
                    1 === t.length && a(t[0]) && (t = t[0]),
                    0 === t.length
                      ? Qo
                      : n
                      ? e(t).pipe(H(e => n(...e)))
                      : new w(e => new bp(e, t))
                  );
                })(
                  (function(e, t) {
                    return t.map(t => t(e));
                  })(e, t).map(Vp)
                ).pipe(H(Mp));
              };
        }
      }
      function Dp(e) {
        return null != e;
      }
      function Vp(e) {
        const t = Jt(e) ? G(e) : e;
        if (!Yt(t))
          throw new Error(
            'Expected validator to return Promise or Observable.'
          );
        return t;
      }
      function Mp(e) {
        const t = e.reduce(
          (e, t) => (null != t ? Object.assign({}, e, t) : e),
          {}
        );
        return 0 === Object.keys(t).length ? null : t;
      }
      function Lp(e) {
        return e.validate ? t => e.validate(t) : e;
      }
      function Up(e) {
        return e.validate ? t => e.validate(t) : e;
      }
      class Fp {
        constructor(e, t) {
          (this._renderer = e),
            (this._elementRef = t),
            (this.onChange = e => {}),
            (this.onTouched = () => {});
        }
        writeValue(e) {
          this._renderer.setProperty(
            this._elementRef.nativeElement,
            'value',
            null == e ? '' : e
          );
        }
        registerOnChange(e) {
          this.onChange = t => {
            e('' == t ? null : parseFloat(t));
          };
        }
        registerOnTouched(e) {
          this.onTouched = e;
        }
        setDisabledState(e) {
          this._renderer.setProperty(
            this._elementRef.nativeElement,
            'disabled',
            e
          );
        }
      }
      class jp {
        constructor() {
          this._accessors = [];
        }
        add(e, t) {
          this._accessors.push([e, t]);
        }
        remove(e) {
          for (let t = this._accessors.length - 1; t >= 0; --t)
            if (this._accessors[t][1] === e)
              return void this._accessors.splice(t, 1);
        }
        select(e) {
          this._accessors.forEach(t => {
            this._isSameGroup(t, e) && t[1] !== e && t[1].fireUncheck(e.value);
          });
        }
        _isSameGroup(e, t) {
          return (
            !!e[0].control &&
            e[0]._parent === t._control._parent &&
            e[1].name === t.name
          );
        }
      }
      const $p = {
        formControlName:
          '\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });',
        formGroupName:
          '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',
        formArrayName:
          '\n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });',
        ngModelGroup:
          '\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>',
        ngModelWithFormGroup:
          '\n    <div [formGroup]="myGroup">\n       <input formControlName="firstName">\n       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n    </div>\n  ',
      };
      class Hp {
        static controlParentException() {
          throw new Error(
            `formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ${$p.formControlName}`
          );
        }
        static ngModelGroupException() {
          throw new Error(
            `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ${$p.formGroupName}\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        ${$p.ngModelGroup}`
          );
        }
        static missingFormException() {
          throw new Error(
            `formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ${$p.formControlName}`
          );
        }
        static groupParentException() {
          throw new Error(
            `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ${$p.formGroupName}`
          );
        }
        static arrayParentException() {
          throw new Error(
            `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        ${$p.formArrayName}`
          );
        }
        static disabledAttrWarning() {
          console.warn(
            "\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    "
          );
        }
        static ngModelWarning(e) {
          console.warn(
            `\n    It looks like you're using ngModel on the same form field as ${e}. \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/${
              'formControl' === e ? 'FormControlDirective' : 'FormControlName'
            }#use-with-ngmodel\n    `
          );
        }
      }
      function zp(e, t) {
        return null == e
          ? `${t}`
          : (t && 'object' == typeof t && (t = 'Object'),
            `${e}: ${t}`.slice(0, 50));
      }
      class Bp {
        constructor(e, t) {
          (this._renderer = e),
            (this._elementRef = t),
            (this._optionMap = new Map()),
            (this._idCounter = 0),
            (this.onChange = e => {}),
            (this.onTouched = () => {}),
            (this._compareWith = Gt);
        }
        set compareWith(e) {
          if ('function' != typeof e)
            throw new Error(
              `compareWith must be a function, but received ${JSON.stringify(
                e
              )}`
            );
          this._compareWith = e;
        }
        writeValue(e) {
          this.value = e;
          const t = this._getOptionId(e);
          null == t &&
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'selectedIndex',
              -1
            );
          const n = zp(t, e);
          this._renderer.setProperty(
            this._elementRef.nativeElement,
            'value',
            n
          );
        }
        registerOnChange(e) {
          this.onChange = t => {
            (this.value = this._getOptionValue(t)), e(this.value);
          };
        }
        registerOnTouched(e) {
          this.onTouched = e;
        }
        setDisabledState(e) {
          this._renderer.setProperty(
            this._elementRef.nativeElement,
            'disabled',
            e
          );
        }
        _registerOption() {
          return (this._idCounter++).toString();
        }
        _getOptionId(e) {
          for (const t of Array.from(this._optionMap.keys()))
            if (this._compareWith(this._optionMap.get(t), e)) return t;
          return null;
        }
        _getOptionValue(e) {
          const t = (function(e) {
            return e.split(':')[0];
          })(e);
          return this._optionMap.has(t) ? this._optionMap.get(t) : e;
        }
      }
      class qp {
        constructor(e, t, n) {
          (this._element = e),
            (this._renderer = t),
            (this._select = n),
            this._select && (this.id = this._select._registerOption());
        }
        set ngValue(e) {
          null != this._select &&
            (this._select._optionMap.set(this.id, e),
            this._setElementValue(zp(this.id, e)),
            this._select.writeValue(this._select.value));
        }
        set value(e) {
          this._setElementValue(e),
            this._select && this._select.writeValue(this._select.value);
        }
        _setElementValue(e) {
          this._renderer.setProperty(this._element.nativeElement, 'value', e);
        }
        ngOnDestroy() {
          this._select &&
            (this._select._optionMap.delete(this.id),
            this._select.writeValue(this._select.value));
        }
      }
      function Gp(e, t) {
        return null == e
          ? `${t}`
          : ('string' == typeof t && (t = `'${t}'`),
            t && 'object' == typeof t && (t = 'Object'),
            `${e}: ${t}`.slice(0, 50));
      }
      class Wp {
        constructor(e, t, n) {
          (this._element = e),
            (this._renderer = t),
            (this._select = n),
            this._select && (this.id = this._select._registerOption(this));
        }
        set ngValue(e) {
          null != this._select &&
            ((this._value = e),
            this._setElementValue(Gp(this.id, e)),
            this._select.writeValue(this._select.value));
        }
        set value(e) {
          this._select
            ? ((this._value = e),
              this._setElementValue(Gp(this.id, e)),
              this._select.writeValue(this._select.value))
            : this._setElementValue(e);
        }
        _setElementValue(e) {
          this._renderer.setProperty(this._element.nativeElement, 'value', e);
        }
        _setSelected(e) {
          this._renderer.setProperty(
            this._element.nativeElement,
            'selected',
            e
          );
        }
        ngOnDestroy() {
          this._select &&
            (this._select._optionMap.delete(this.id),
            this._select.writeValue(this._select.value));
        }
      }
      function Zp(e, t) {
        return [...t.path, e];
      }
      function Qp(e, t) {
        e || Xp(t, 'Cannot find control with'),
          t.valueAccessor || Xp(t, 'No value accessor for form control with'),
          (e.validator = Pp.compose([e.validator, t.validator])),
          (e.asyncValidator = Pp.composeAsync([
            e.asyncValidator,
            t.asyncValidator,
          ])),
          t.valueAccessor.writeValue(e.value),
          (function(e, t) {
            t.valueAccessor.registerOnChange(n => {
              (e._pendingValue = n),
                (e._pendingChange = !0),
                (e._pendingDirty = !0),
                'change' === e.updateOn && Kp(e, t);
            });
          })(e, t),
          (function(e, t) {
            e.registerOnChange((e, n) => {
              t.valueAccessor.writeValue(e), n && t.viewToModelUpdate(e);
            });
          })(e, t),
          (function(e, t) {
            t.valueAccessor.registerOnTouched(() => {
              (e._pendingTouched = !0),
                'blur' === e.updateOn && e._pendingChange && Kp(e, t),
                'submit' !== e.updateOn && e.markAsTouched();
            });
          })(e, t),
          t.valueAccessor.setDisabledState &&
            e.registerOnDisabledChange(e => {
              t.valueAccessor.setDisabledState(e);
            }),
          t._rawValidators.forEach(t => {
            t.registerOnValidatorChange &&
              t.registerOnValidatorChange(() => e.updateValueAndValidity());
          }),
          t._rawAsyncValidators.forEach(t => {
            t.registerOnValidatorChange &&
              t.registerOnValidatorChange(() => e.updateValueAndValidity());
          });
      }
      function Kp(e, t) {
        e._pendingDirty && e.markAsDirty(),
          e.setValue(e._pendingValue, { emitModelToViewChange: !1 }),
          t.viewToModelUpdate(e._pendingValue),
          (e._pendingChange = !1);
      }
      function Jp(e, t) {
        null == e && Xp(t, 'Cannot find control with'),
          (e.validator = Pp.compose([e.validator, t.validator])),
          (e.asyncValidator = Pp.composeAsync([
            e.asyncValidator,
            t.asyncValidator,
          ]));
      }
      function Yp(e) {
        return Xp(
          e,
          'There is no FormControl instance attached to form control element with'
        );
      }
      function Xp(e, t) {
        let n;
        throw ((n =
          e.path.length > 1
            ? `path: '${e.path.join(' -> ')}'`
            : e.path[0]
            ? `name: '${e.path}'`
            : 'unspecified name attribute'),
        new Error(`${t} ${n}`));
      }
      function eg(e) {
        return null != e ? Pp.compose(e.map(Lp)) : null;
      }
      function tg(e) {
        return null != e ? Pp.composeAsync(e.map(Up)) : null;
      }
      function ng(e, t) {
        if (!e.hasOwnProperty('model')) return !1;
        const n = e.model;
        return !!n.isFirstChange() || !Gt(t, n.currentValue);
      }
      const rg = [
        class {
          constructor(e, t) {
            (this._renderer = e),
              (this._elementRef = t),
              (this.onChange = e => {}),
              (this.onTouched = () => {});
          }
          writeValue(e) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'checked',
              e
            );
          }
          registerOnChange(e) {
            this.onChange = e;
          }
          registerOnTouched(e) {
            this.onTouched = e;
          }
          setDisabledState(e) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              e
            );
          }
        },
        class {
          constructor(e, t) {
            (this._renderer = e),
              (this._elementRef = t),
              (this.onChange = e => {}),
              (this.onTouched = () => {});
          }
          writeValue(e) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'value',
              parseFloat(e)
            );
          }
          registerOnChange(e) {
            this.onChange = t => {
              e('' == t ? null : parseFloat(t));
            };
          }
          registerOnTouched(e) {
            this.onTouched = e;
          }
          setDisabledState(e) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              e
            );
          }
        },
        Fp,
        Bp,
        class {
          constructor(e, t) {
            (this._renderer = e),
              (this._elementRef = t),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = e => {}),
              (this.onTouched = () => {}),
              (this._compareWith = Gt);
          }
          set compareWith(e) {
            if ('function' != typeof e)
              throw new Error(
                `compareWith must be a function, but received ${JSON.stringify(
                  e
                )}`
              );
            this._compareWith = e;
          }
          writeValue(e) {
            let t;
            if (((this.value = e), Array.isArray(e))) {
              const n = e.map(e => this._getOptionId(e));
              t = (e, t) => {
                e._setSelected(n.indexOf(t.toString()) > -1);
              };
            } else
              t = (e, t) => {
                e._setSelected(!1);
              };
            this._optionMap.forEach(t);
          }
          registerOnChange(e) {
            this.onChange = t => {
              const n = [];
              if (t.hasOwnProperty('selectedOptions')) {
                const e = t.selectedOptions;
                for (let t = 0; t < e.length; t++) {
                  const r = e.item(t),
                    s = this._getOptionValue(r.value);
                  n.push(s);
                }
              } else {
                const e = t.options;
                for (let t = 0; t < e.length; t++) {
                  const r = e.item(t);
                  if (r.selected) {
                    const e = this._getOptionValue(r.value);
                    n.push(e);
                  }
                }
              }
              (this.value = n), e(n);
            };
          }
          registerOnTouched(e) {
            this.onTouched = e;
          }
          setDisabledState(e) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              e
            );
          }
          _registerOption(e) {
            const t = (this._idCounter++).toString();
            return this._optionMap.set(t, e), t;
          }
          _getOptionId(e) {
            for (const t of Array.from(this._optionMap.keys()))
              if (this._compareWith(this._optionMap.get(t)._value, e)) return t;
            return null;
          }
          _getOptionValue(e) {
            const t = (function(e) {
              return e.split(':')[0];
            })(e);
            return this._optionMap.has(t) ? this._optionMap.get(t)._value : e;
          }
        },
        class {
          constructor(e, t, n, r) {
            (this._renderer = e),
              (this._elementRef = t),
              (this._registry = n),
              (this._injector = r),
              (this.onChange = () => {}),
              (this.onTouched = () => {});
          }
          ngOnInit() {
            (this._control = this._injector.get(Ep)),
              this._checkName(),
              this._registry.add(this._control, this);
          }
          ngOnDestroy() {
            this._registry.remove(this);
          }
          writeValue(e) {
            (this._state = e === this.value),
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                'checked',
                this._state
              );
          }
          registerOnChange(e) {
            (this._fn = e),
              (this.onChange = () => {
                e(this.value), this._registry.select(this);
              });
          }
          fireUncheck(e) {
            this.writeValue(e);
          }
          registerOnTouched(e) {
            this.onTouched = e;
          }
          setDisabledState(e) {
            this._renderer.setProperty(
              this._elementRef.nativeElement,
              'disabled',
              e
            );
          }
          _checkName() {
            this.name &&
              this.formControlName &&
              this.name !== this.formControlName &&
              this._throwNameError(),
              !this.name &&
                this.formControlName &&
                (this.name = this.formControlName);
          }
          _throwNameError() {
            throw new Error(
              '\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    '
            );
          }
        },
      ];
      function sg(e, t) {
        e._syncPendingControls(),
          t.forEach(e => {
            const t = e.control;
            'submit' === t.updateOn &&
              t._pendingChange &&
              (e.viewToModelUpdate(t._pendingValue), (t._pendingChange = !1));
          });
      }
      function lg(e, t) {
        if (!t) return null;
        Array.isArray(t) ||
          Xp(
            e,
            'Value accessor was not provided as an array for form control with'
          );
        let n = void 0,
          r = void 0,
          s = void 0;
        return (
          t.forEach(t => {
            t.constructor === Cp
              ? (n = t)
              : (function(e) {
                  return rg.some(t => e.constructor === t);
                })(t)
              ? (r &&
                  Xp(
                    e,
                    'More than one built-in value accessor matches form control with'
                  ),
                (r = t))
              : (s &&
                  Xp(
                    e,
                    'More than one custom value accessor matches form control with'
                  ),
                (s = t));
          }),
          s ||
            r ||
            n ||
            (Xp(e, 'No valid value accessor for form control with'), null)
        );
      }
      function ig(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      const og = 'VALID',
        ag = 'INVALID',
        ug = 'PENDING',
        cg = 'DISABLED';
      function hg(e) {
        const t = pg(e) ? e.validators : e;
        return Array.isArray(t) ? eg(t) : t || null;
      }
      function dg(e, t) {
        const n = pg(t) ? t.asyncValidators : e;
        return Array.isArray(n) ? tg(n) : n || null;
      }
      function pg(e) {
        return null != e && !Array.isArray(e) && 'object' == typeof e;
      }
      class gg {
        constructor(e, t) {
          (this.validator = e),
            (this.asyncValidator = t),
            (this._onCollectionChange = () => {}),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []);
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return this.status === og;
        }
        get invalid() {
          return this.status === ag;
        }
        get pending() {
          return this.status == ug;
        }
        get disabled() {
          return this.status === cg;
        }
        get enabled() {
          return this.status !== cg;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn
            ? this._updateOn
            : this.parent
            ? this.parent.updateOn
            : 'change';
        }
        setValidators(e) {
          this.validator = hg(e);
        }
        setAsyncValidators(e) {
          this.asyncValidator = dg(e);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(e = {}) {
          (this.touched = !0),
            this._parent && !e.onlySelf && this._parent.markAsTouched(e);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }),
            this._forEachChild(e => e.markAllAsTouched());
        }
        markAsUntouched(e = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild(e => {
              e.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !e.onlySelf && this._parent._updateTouched(e);
        }
        markAsDirty(e = {}) {
          (this.pristine = !1),
            this._parent && !e.onlySelf && this._parent.markAsDirty(e);
        }
        markAsPristine(e = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild(e => {
              e.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !e.onlySelf && this._parent._updatePristine(e);
        }
        markAsPending(e = {}) {
          (this.status = ug),
            !1 !== e.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !e.onlySelf && this._parent.markAsPending(e);
        }
        disable(e = {}) {
          const t = this._parentMarkedDirty(e.onlySelf);
          (this.status = cg),
            (this.errors = null),
            this._forEachChild(t => {
              t.disable(Object.assign({}, e, { onlySelf: !0 }));
            }),
            this._updateValue(),
            !1 !== e.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._updateAncestors(
              Object.assign({}, e, { skipPristineCheck: t })
            ),
            this._onDisabledChange.forEach(e => e(!0));
        }
        enable(e = {}) {
          const t = this._parentMarkedDirty(e.onlySelf);
          (this.status = og),
            this._forEachChild(t => {
              t.enable(Object.assign({}, e, { onlySelf: !0 }));
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: e.emitEvent,
            }),
            this._updateAncestors(
              Object.assign({}, e, { skipPristineCheck: t })
            ),
            this._onDisabledChange.forEach(e => e(!1));
        }
        _updateAncestors(e) {
          this._parent &&
            !e.onlySelf &&
            (this._parent.updateValueAndValidity(e),
            e.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(e) {
          this._parent = e;
        }
        updateValueAndValidity(e = {}) {
          this._setInitialStatus(),
            this._updateValue(),
            this.enabled &&
              (this._cancelExistingSubscription(),
              (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status !== og && this.status !== ug) ||
                this._runAsyncValidator(e.emitEvent)),
            !1 !== e.emitEvent &&
              (this.valueChanges.emit(this.value),
              this.statusChanges.emit(this.status)),
            this._parent &&
              !e.onlySelf &&
              this._parent.updateValueAndValidity(e);
        }
        _updateTreeValidity(e = { emitEvent: !0 }) {
          this._forEachChild(t => t._updateTreeValidity(e)),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: e.emitEvent,
            });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? cg : og;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(e) {
          if (this.asyncValidator) {
            this.status = ug;
            const t = Vp(this.asyncValidator(this));
            this._asyncValidationSubscription = t.subscribe(t =>
              this.setErrors(t, { emitEvent: e })
            );
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription &&
            this._asyncValidationSubscription.unsubscribe();
        }
        setErrors(e, t = {}) {
          (this.errors = e), this._updateControlsErrors(!1 !== t.emitEvent);
        }
        get(e) {
          return (function(e, t, n) {
            return null == t
              ? null
              : (t instanceof Array || (t = t.split('.')),
                t instanceof Array && 0 === t.length
                  ? null
                  : t.reduce(
                      (e, t) =>
                        e instanceof mg
                          ? e.controls.hasOwnProperty(t)
                            ? e.controls[t]
                            : null
                          : (e instanceof yg && e.at(t)) || null,
                      e
                    ));
          })(this, e);
        }
        getError(e, t) {
          const n = t ? this.get(t) : this;
          return n && n.errors ? n.errors[e] : null;
        }
        hasError(e, t) {
          return !!this.getError(e, t);
        }
        get root() {
          let e = this;
          for (; e._parent; ) e = e._parent;
          return e;
        }
        _updateControlsErrors(e) {
          (this.status = this._calculateStatus()),
            e && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(e);
        }
        _initObservables() {
          (this.valueChanges = new Ds()), (this.statusChanges = new Ds());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? cg
            : this.errors
            ? ag
            : this._anyControlsHaveStatus(ug)
            ? ug
            : this._anyControlsHaveStatus(ag)
            ? ag
            : og;
        }
        _anyControlsHaveStatus(e) {
          return this._anyControls(t => t.status === e);
        }
        _anyControlsDirty() {
          return this._anyControls(e => e.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls(e => e.touched);
        }
        _updatePristine(e = {}) {
          (this.pristine = !this._anyControlsDirty()),
            this._parent && !e.onlySelf && this._parent._updatePristine(e);
        }
        _updateTouched(e = {}) {
          (this.touched = this._anyControlsTouched()),
            this._parent && !e.onlySelf && this._parent._updateTouched(e);
        }
        _isBoxedValue(e) {
          return (
            'object' == typeof e &&
            null !== e &&
            2 === Object.keys(e).length &&
            'value' in e &&
            'disabled' in e
          );
        }
        _registerOnCollectionChange(e) {
          this._onCollectionChange = e;
        }
        _setUpdateStrategy(e) {
          pg(e) && null != e.updateOn && (this._updateOn = e.updateOn);
        }
        _parentMarkedDirty(e) {
          return (
            !e &&
            this._parent &&
            this._parent.dirty &&
            !this._parent._anyControlsDirty()
          );
        }
      }
      class fg extends gg {
        constructor(e = null, t, n) {
          super(hg(t), dg(n, t)),
            (this._onChange = []),
            this._applyFormState(e),
            this._setUpdateStrategy(t),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
            this._initObservables();
        }
        setValue(e, t = {}) {
          (this.value = this._pendingValue = e),
            this._onChange.length &&
              !1 !== t.emitModelToViewChange &&
              this._onChange.forEach(e =>
                e(this.value, !1 !== t.emitViewToModelChange)
              ),
            this.updateValueAndValidity(t);
        }
        patchValue(e, t = {}) {
          this.setValue(e, t);
        }
        reset(e = null, t = {}) {
          this._applyFormState(e),
            this.markAsPristine(t),
            this.markAsUntouched(t),
            this.setValue(this.value, t),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(e) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(e) {
          this._onChange.push(e);
        }
        _clearChangeFns() {
          (this._onChange = []),
            (this._onDisabledChange = []),
            (this._onCollectionChange = () => {});
        }
        registerOnDisabledChange(e) {
          this._onDisabledChange.push(e);
        }
        _forEachChild(e) {}
        _syncPendingControls() {
          return !(
            'submit' !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, {
              onlySelf: !0,
              emitModelToViewChange: !1,
            }),
            0)
          );
        }
        _applyFormState(e) {
          this._isBoxedValue(e)
            ? ((this.value = this._pendingValue = e.value),
              e.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = e);
        }
      }
      class mg extends gg {
        constructor(e, t, n) {
          super(hg(t), dg(n, t)),
            (this.controls = e),
            this._initObservables(),
            this._setUpdateStrategy(t),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
        }
        registerControl(e, t) {
          return this.controls[e]
            ? this.controls[e]
            : ((this.controls[e] = t),
              t.setParent(this),
              t._registerOnCollectionChange(this._onCollectionChange),
              t);
        }
        addControl(e, t) {
          this.registerControl(e, t),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        removeControl(e) {
          this.controls[e] &&
            this.controls[e]._registerOnCollectionChange(() => {}),
            delete this.controls[e],
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        setControl(e, t) {
          this.controls[e] &&
            this.controls[e]._registerOnCollectionChange(() => {}),
            delete this.controls[e],
            t && this.registerControl(e, t),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        contains(e) {
          return this.controls.hasOwnProperty(e) && this.controls[e].enabled;
        }
        setValue(e, t = {}) {
          this._checkAllValuesPresent(e),
            Object.keys(e).forEach(n => {
              this._throwIfControlMissing(n),
                this.controls[n].setValue(e[n], {
                  onlySelf: !0,
                  emitEvent: t.emitEvent,
                });
            }),
            this.updateValueAndValidity(t);
        }
        patchValue(e, t = {}) {
          Object.keys(e).forEach(n => {
            this.controls[n] &&
              this.controls[n].patchValue(e[n], {
                onlySelf: !0,
                emitEvent: t.emitEvent,
              });
          }),
            this.updateValueAndValidity(t);
        }
        reset(e = {}, t = {}) {
          this._forEachChild((n, r) => {
            n.reset(e[r], { onlySelf: !0, emitEvent: t.emitEvent });
          }),
            this._updatePristine(t),
            this._updateTouched(t),
            this.updateValueAndValidity(t);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (e, t, n) => (
              (e[n] = t instanceof fg ? t.value : t.getRawValue()), e
            )
          );
        }
        _syncPendingControls() {
          let e = this._reduceChildren(
            !1,
            (e, t) => !!t._syncPendingControls() || e
          );
          return e && this.updateValueAndValidity({ onlySelf: !0 }), e;
        }
        _throwIfControlMissing(e) {
          if (!Object.keys(this.controls).length)
            throw new Error(
              "\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.controls[e])
            throw new Error(`Cannot find form control with name: ${e}.`);
        }
        _forEachChild(e) {
          Object.keys(this.controls).forEach(t => e(this.controls[t], t));
        }
        _setUpControls() {
          this._forEachChild(e => {
            e.setParent(this),
              e._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(e) {
          let t = !1;
          return (
            this._forEachChild((n, r) => {
              t = t || (this.contains(r) && e(n));
            }),
            t
          );
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (e, t, n) => ((t.enabled || this.disabled) && (e[n] = t.value), e)
          );
        }
        _reduceChildren(e, t) {
          let n = e;
          return (
            this._forEachChild((e, r) => {
              n = t(n, e, r);
            }),
            n
          );
        }
        _allControlsDisabled() {
          for (const e of Object.keys(this.controls))
            if (this.controls[e].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _checkAllValuesPresent(e) {
          this._forEachChild((t, n) => {
            if (void 0 === e[n])
              throw new Error(
                `Must supply a value for form control with name: '${n}'.`
              );
          });
        }
      }
      class yg extends gg {
        constructor(e, t, n) {
          super(hg(t), dg(n, t)),
            (this.controls = e),
            this._initObservables(),
            this._setUpdateStrategy(t),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
        }
        at(e) {
          return this.controls[e];
        }
        push(e) {
          this.controls.push(e),
            this._registerControl(e),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        insert(e, t) {
          this.controls.splice(e, 0, t),
            this._registerControl(t),
            this.updateValueAndValidity();
        }
        removeAt(e) {
          this.controls[e] &&
            this.controls[e]._registerOnCollectionChange(() => {}),
            this.controls.splice(e, 1),
            this.updateValueAndValidity();
        }
        setControl(e, t) {
          this.controls[e] &&
            this.controls[e]._registerOnCollectionChange(() => {}),
            this.controls.splice(e, 1),
            t && (this.controls.splice(e, 0, t), this._registerControl(t)),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(e, t = {}) {
          this._checkAllValuesPresent(e),
            e.forEach((e, n) => {
              this._throwIfControlMissing(n),
                this.at(n).setValue(e, {
                  onlySelf: !0,
                  emitEvent: t.emitEvent,
                });
            }),
            this.updateValueAndValidity(t);
        }
        patchValue(e, t = {}) {
          e.forEach((e, n) => {
            this.at(n) &&
              this.at(n).patchValue(e, {
                onlySelf: !0,
                emitEvent: t.emitEvent,
              });
          }),
            this.updateValueAndValidity(t);
        }
        reset(e = [], t = {}) {
          this._forEachChild((n, r) => {
            n.reset(e[r], { onlySelf: !0, emitEvent: t.emitEvent });
          }),
            this._updatePristine(t),
            this._updateTouched(t),
            this.updateValueAndValidity(t);
        }
        getRawValue() {
          return this.controls.map(e =>
            e instanceof fg ? e.value : e.getRawValue()
          );
        }
        clear() {
          this.controls.length < 1 ||
            (this._forEachChild(e => e._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity());
        }
        _syncPendingControls() {
          let e = this.controls.reduce(
            (e, t) => !!t._syncPendingControls() || e,
            !1
          );
          return e && this.updateValueAndValidity({ onlySelf: !0 }), e;
        }
        _throwIfControlMissing(e) {
          if (!this.controls.length)
            throw new Error(
              "\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.at(e))
            throw new Error(`Cannot find form control at index ${e}`);
        }
        _forEachChild(e) {
          this.controls.forEach((t, n) => {
            e(t, n);
          });
        }
        _updateValue() {
          this.value = this.controls
            .filter(e => e.enabled || this.disabled)
            .map(e => e.value);
        }
        _anyControls(e) {
          return this.controls.some(t => t.enabled && e(t));
        }
        _setUpControls() {
          this._forEachChild(e => this._registerControl(e));
        }
        _checkAllValuesPresent(e) {
          this._forEachChild((t, n) => {
            if (void 0 === e[n])
              throw new Error(
                `Must supply a value for form control at index: ${n}.`
              );
          });
        }
        _allControlsDisabled() {
          for (const e of this.controls) if (e.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(e) {
          e.setParent(this),
            e._registerOnCollectionChange(this._onCollectionChange);
        }
      }
      const vg = (() => Promise.resolve(null))();
      class bg extends Sp {
        constructor(e, t) {
          super(),
            (this.submitted = !1),
            (this._directives = []),
            (this.ngSubmit = new Ds()),
            (this.form = new mg({}, eg(e), tg(t)));
        }
        ngAfterViewInit() {
          this._setUpdateStrategy();
        }
        get formDirective() {
          return this;
        }
        get control() {
          return this.form;
        }
        get path() {
          return [];
        }
        get controls() {
          return this.form.controls;
        }
        addControl(e) {
          vg.then(() => {
            const t = this._findContainer(e.path);
            (e.control = t.registerControl(e.name, e.control)),
              Qp(e.control, e),
              e.control.updateValueAndValidity({ emitEvent: !1 }),
              this._directives.push(e);
          });
        }
        getControl(e) {
          return this.form.get(e.path);
        }
        removeControl(e) {
          vg.then(() => {
            const t = this._findContainer(e.path);
            t && t.removeControl(e.name), ig(this._directives, e);
          });
        }
        addFormGroup(e) {
          vg.then(() => {
            const t = this._findContainer(e.path),
              n = new mg({});
            Jp(n, e),
              t.registerControl(e.name, n),
              n.updateValueAndValidity({ emitEvent: !1 });
          });
        }
        removeFormGroup(e) {
          vg.then(() => {
            const t = this._findContainer(e.path);
            t && t.removeControl(e.name);
          });
        }
        getFormGroup(e) {
          return this.form.get(e.path);
        }
        updateModel(e, t) {
          vg.then(() => {
            this.form.get(e.path).setValue(t);
          });
        }
        setValue(e) {
          this.control.setValue(e);
        }
        onSubmit(e) {
          return (
            (this.submitted = !0),
            sg(this.form, this._directives),
            this.ngSubmit.emit(e),
            !1
          );
        }
        onReset() {
          this.resetForm();
        }
        resetForm(e) {
          this.form.reset(e), (this.submitted = !1);
        }
        _setUpdateStrategy() {
          this.options &&
            null != this.options.updateOn &&
            (this.form._updateOn = this.options.updateOn);
        }
        _findContainer(e) {
          return e.pop(), e.length ? this.form.get(e) : this.form;
        }
      }
      class _g {
        static modelParentException() {
          throw new Error(
            `\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive "formControlName" instead.  Example:\n\n      ${$p.formControlName}\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      ${$p.ngModelWithFormGroup}`
          );
        }
        static formGroupNameException() {
          throw new Error(
            `\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ${$p.formGroupName}\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      ${$p.ngModelGroup}`
          );
        }
        static missingNameException() {
          throw new Error(
            'If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as \'standalone\' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]="person.firstName" name="first">\n      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">'
          );
        }
        static modelGroupParentException() {
          throw new Error(
            `\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ${$p.formGroupName}\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ${$p.ngModelGroup}`
          );
        }
        static ngFormWarning() {
          console.warn(
            "\n    It looks like you're using 'ngForm'.\n\n    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed\n    in Angular v9.\n\n    Use 'ng-form' instead.\n\n    Before:\n    <ngForm #myForm=\"ngForm\">\n\n    After:\n    <ng-form #myForm=\"ngForm\">\n    "
          );
        }
      }
      const wg = new ke('NgFormSelectorWarning');
      class Cg extends Sp {
        ngOnInit() {
          this._checkParentType(), this.formDirective.addFormGroup(this);
        }
        ngOnDestroy() {
          this.formDirective && this.formDirective.removeFormGroup(this);
        }
        get control() {
          return this.formDirective.getFormGroup(this);
        }
        get path() {
          return Zp(this.name, this._parent);
        }
        get formDirective() {
          return this._parent ? this._parent.formDirective : null;
        }
        get validator() {
          return eg(this._validators);
        }
        get asyncValidator() {
          return tg(this._asyncValidators);
        }
        _checkParentType() {}
      }
      class xg extends Cg {
        constructor(e, t, n) {
          super(),
            (this._parent = e),
            (this._validators = t),
            (this._asyncValidators = n);
        }
        _checkParentType() {
          this._parent instanceof xg ||
            this._parent instanceof bg ||
            _g.modelGroupParentException();
        }
      }
      const Sg = (() => Promise.resolve(null))();
      class kg extends Ep {
        constructor(e, t, n, r) {
          super(),
            (this.control = new fg()),
            (this._registered = !1),
            (this.update = new Ds()),
            (this._parent = e),
            (this._rawValidators = t || []),
            (this._rawAsyncValidators = n || []),
            (this.valueAccessor = lg(this, r));
        }
        ngOnChanges(e) {
          this._checkForErrors(),
            this._registered || this._setUpControl(),
            'isDisabled' in e && this._updateDisabled(e),
            ng(e, this.viewModel) &&
              (this._updateValue(this.model), (this.viewModel = this.model));
        }
        ngOnDestroy() {
          this.formDirective && this.formDirective.removeControl(this);
        }
        get path() {
          return this._parent ? Zp(this.name, this._parent) : [this.name];
        }
        get formDirective() {
          return this._parent ? this._parent.formDirective : null;
        }
        get validator() {
          return eg(this._rawValidators);
        }
        get asyncValidator() {
          return tg(this._rawAsyncValidators);
        }
        viewToModelUpdate(e) {
          (this.viewModel = e), this.update.emit(e);
        }
        _setUpControl() {
          this._setUpdateStrategy(),
            this._isStandalone()
              ? this._setUpStandalone()
              : this.formDirective.addControl(this),
            (this._registered = !0);
        }
        _setUpdateStrategy() {
          this.options &&
            null != this.options.updateOn &&
            (this.control._updateOn = this.options.updateOn);
        }
        _isStandalone() {
          return !this._parent || !(!this.options || !this.options.standalone);
        }
        _setUpStandalone() {
          Qp(this.control, this),
            this.control.updateValueAndValidity({ emitEvent: !1 });
        }
        _checkForErrors() {
          this._isStandalone() || this._checkParentType(), this._checkName();
        }
        _checkParentType() {
          !(this._parent instanceof xg) && this._parent instanceof Cg
            ? _g.formGroupNameException()
            : this._parent instanceof xg ||
              this._parent instanceof bg ||
              _g.modelParentException();
        }
        _checkName() {
          this.options && this.options.name && (this.name = this.options.name),
            this._isStandalone() || this.name || _g.missingNameException();
        }
        _updateValue(e) {
          Sg.then(() => {
            this.control.setValue(e, { emitViewToModelChange: !1 });
          });
        }
        _updateDisabled(e) {
          const t = e.isDisabled.currentValue,
            n = '' === t || (t && 'false' !== t);
          Sg.then(() => {
            n && !this.control.disabled
              ? this.control.disable()
              : !n && this.control.disabled && this.control.enable();
          });
        }
      }
      class Eg {}
      const Tg = new ke('NgModelWithFormControlWarning');
      class Ag extends Sp {
        constructor(e, t) {
          super(),
            (this._validators = e),
            (this._asyncValidators = t),
            (this.submitted = !1),
            (this.directives = []),
            (this.form = null),
            (this.ngSubmit = new Ds());
        }
        ngOnChanges(e) {
          this._checkFormPresent(),
            e.hasOwnProperty('form') &&
              (this._updateValidators(),
              this._updateDomValue(),
              this._updateRegistrations());
        }
        get formDirective() {
          return this;
        }
        get control() {
          return this.form;
        }
        get path() {
          return [];
        }
        addControl(e) {
          const t = this.form.get(e.path);
          return (
            Qp(t, e),
            t.updateValueAndValidity({ emitEvent: !1 }),
            this.directives.push(e),
            t
          );
        }
        getControl(e) {
          return this.form.get(e.path);
        }
        removeControl(e) {
          ig(this.directives, e);
        }
        addFormGroup(e) {
          const t = this.form.get(e.path);
          Jp(t, e), t.updateValueAndValidity({ emitEvent: !1 });
        }
        removeFormGroup(e) {}
        getFormGroup(e) {
          return this.form.get(e.path);
        }
        addFormArray(e) {
          const t = this.form.get(e.path);
          Jp(t, e), t.updateValueAndValidity({ emitEvent: !1 });
        }
        removeFormArray(e) {}
        getFormArray(e) {
          return this.form.get(e.path);
        }
        updateModel(e, t) {
          this.form.get(e.path).setValue(t);
        }
        onSubmit(e) {
          return (
            (this.submitted = !0),
            sg(this.form, this.directives),
            this.ngSubmit.emit(e),
            !1
          );
        }
        onReset() {
          this.resetForm();
        }
        resetForm(e) {
          this.form.reset(e), (this.submitted = !1);
        }
        _updateDomValue() {
          this.directives.forEach(e => {
            const t = this.form.get(e.path);
            e.control !== t &&
              ((function(e, t) {
                t.valueAccessor.registerOnChange(() => Yp(t)),
                  t.valueAccessor.registerOnTouched(() => Yp(t)),
                  t._rawValidators.forEach(e => {
                    e.registerOnValidatorChange &&
                      e.registerOnValidatorChange(null);
                  }),
                  t._rawAsyncValidators.forEach(e => {
                    e.registerOnValidatorChange &&
                      e.registerOnValidatorChange(null);
                  }),
                  e && e._clearChangeFns();
              })(e.control, e),
              t && Qp(t, e),
              (e.control = t));
          }),
            this.form._updateTreeValidity({ emitEvent: !1 });
        }
        _updateRegistrations() {
          this.form._registerOnCollectionChange(() => this._updateDomValue()),
            this._oldForm &&
              this._oldForm._registerOnCollectionChange(() => {}),
            (this._oldForm = this.form);
        }
        _updateValidators() {
          const e = eg(this._validators);
          this.form.validator = Pp.compose([this.form.validator, e]);
          const t = tg(this._asyncValidators);
          this.form.asyncValidator = Pp.composeAsync([
            this.form.asyncValidator,
            t,
          ]);
        }
        _checkFormPresent() {
          this.form || Hp.missingFormException();
        }
      }
      class Ng extends Cg {
        constructor(e, t, n) {
          super(),
            (this._parent = e),
            (this._validators = t),
            (this._asyncValidators = n);
        }
        _checkParentType() {
          Ig(this._parent) && Hp.groupParentException();
        }
      }
      class Og extends Sp {
        constructor(e, t, n) {
          super(),
            (this._parent = e),
            (this._validators = t),
            (this._asyncValidators = n);
        }
        ngOnInit() {
          this._checkParentType(), this.formDirective.addFormArray(this);
        }
        ngOnDestroy() {
          this.formDirective && this.formDirective.removeFormArray(this);
        }
        get control() {
          return this.formDirective.getFormArray(this);
        }
        get formDirective() {
          return this._parent ? this._parent.formDirective : null;
        }
        get path() {
          return Zp(this.name, this._parent);
        }
        get validator() {
          return eg(this._validators);
        }
        get asyncValidator() {
          return tg(this._asyncValidators);
        }
        _checkParentType() {
          Ig(this._parent) && Hp.arrayParentException();
        }
      }
      function Ig(e) {
        return !(e instanceof Ng || e instanceof Ag || e instanceof Og);
      }
      let Rg = (() => {
        class e extends Ep {
          constructor(e, t, n, r, s) {
            super(),
              (this._ngModelWarningConfig = s),
              (this._added = !1),
              (this.update = new Ds()),
              (this._ngModelWarningSent = !1),
              (this._parent = e),
              (this._rawValidators = t || []),
              (this._rawAsyncValidators = n || []),
              (this.valueAccessor = lg(this, r));
          }
          set isDisabled(e) {
            Hp.disabledAttrWarning();
          }
          ngOnChanges(t) {
            var n, r;
            this._added || this._setUpControl(),
              ng(t, this.viewModel) &&
                ('formControlName',
                (n = e),
                this,
                (r = this._ngModelWarningConfig),
                nt() &&
                  'never' !== r &&
                  ((((null !== r && 'once' !== r) ||
                    n._ngModelWarningSentOnce) &&
                    ('always' !== r || this._ngModelWarningSent)) ||
                    (Hp.ngModelWarning('formControlName'),
                    (n._ngModelWarningSentOnce = !0),
                    (this._ngModelWarningSent = !0))),
                (this.viewModel = this.model),
                this.formDirective.updateModel(this, this.model));
          }
          ngOnDestroy() {
            this.formDirective && this.formDirective.removeControl(this);
          }
          viewToModelUpdate(e) {
            (this.viewModel = e), this.update.emit(e);
          }
          get path() {
            return Zp(this.name, this._parent);
          }
          get formDirective() {
            return this._parent ? this._parent.formDirective : null;
          }
          get validator() {
            return eg(this._rawValidators);
          }
          get asyncValidator() {
            return tg(this._rawAsyncValidators);
          }
          _checkParentType() {
            !(this._parent instanceof Ng) && this._parent instanceof Cg
              ? Hp.ngModelGroupException()
              : this._parent instanceof Ng ||
                this._parent instanceof Ag ||
                this._parent instanceof Og ||
                Hp.controlParentException();
          }
          _setUpControl() {
            this._checkParentType(),
              (this.control = this.formDirective.addControl(this)),
              this.control.disabled &&
                this.valueAccessor.setDisabledState &&
                this.valueAccessor.setDisabledState(!0),
              (this._added = !0);
          }
        }
        return (e._ngModelWarningSentOnce = !1), e;
      })();
      class Pg {
        get required() {
          return this._required;
        }
        set required(e) {
          (this._required = null != e && !1 !== e && 'false' !== `${e}`),
            this._onChange && this._onChange();
        }
        validate(e) {
          return this.required ? Pp.required(e) : null;
        }
        registerOnValidatorChange(e) {
          this._onChange = e;
        }
      }
      class Dg {}
      class Vg {
        group(e, t = null) {
          const n = this._reduceControls(e);
          let r = null,
            s = null,
            l = void 0;
          return (
            null != t &&
              ((function(e) {
                return (
                  void 0 !== e.asyncValidators ||
                  void 0 !== e.validators ||
                  void 0 !== e.updateOn
                );
              })(t)
                ? ((r = null != t.validators ? t.validators : null),
                  (s = null != t.asyncValidators ? t.asyncValidators : null),
                  (l = null != t.updateOn ? t.updateOn : void 0))
                : ((r = null != t.validator ? t.validator : null),
                  (s = null != t.asyncValidator ? t.asyncValidator : null))),
            new mg(n, { asyncValidators: s, updateOn: l, validators: r })
          );
        }
        control(e, t, n) {
          return new fg(e, t, n);
        }
        array(e, t, n) {
          const r = e.map(e => this._createControl(e));
          return new yg(r, t, n);
        }
        _reduceControls(e) {
          const t = {};
          return (
            Object.keys(e).forEach(n => {
              t[n] = this._createControl(e[n]);
            }),
            t
          );
        }
        _createControl(e) {
          return e instanceof fg || e instanceof mg || e instanceof yg
            ? e
            : Array.isArray(e)
            ? this.control(
                e[0],
                e.length > 1 ? e[1] : null,
                e.length > 2 ? e[2] : null
              )
            : this.control(e);
        }
      }
      class Mg {
        static withConfig(e) {
          return {
            ngModule: Mg,
            providers: [
              { provide: wg, useValue: e.warnOnDeprecatedNgFormSelector },
            ],
          };
        }
      }
      class Lg {
        static withConfig(e) {
          return {
            ngModule: Lg,
            providers: [
              { provide: Tg, useValue: e.warnOnNgModelWithFormControl },
            ],
          };
        }
      }
      class Ug {
        constructor(e, t, n) {
          (this.pageScrollService = e),
            (this.router = t),
            (this.pageScrollAdjustHash = !1),
            (this.pageScrollFinish = new Ds()),
            (this.document = n);
        }
        ngOnChanges(e) {
          this.pageScrollInstance = void 0;
        }
        ngOnDestroy() {
          this.pageScrollInstance &&
            this.pageScrollService.stop(this.pageScrollInstance);
        }
        generatePageScrollInstance() {
          if (null == this.pageScrollInstance) {
            const e = {
              document: this.document,
              scrollTarget: this.pageScrollTarget || this.href,
            };
            this.pageScroll && (e.namespace = this.pageScroll),
              null != this.pageScrollHorizontal &&
                (e.verticalScrolling = !this.pageScrollHorizontal),
              null != this.pageScrollOffset &&
                (e.scrollOffset = this.pageScrollOffset),
              null != this.pageScrollInterruptible &&
                (e.interruptible = this.pageScrollInterruptible),
              null != this.pageScrollInView &&
                (e.scrollInView = this.pageScrollInView),
              this.pageScrollEasing && (e.easingLogic = this.pageScrollEasing),
              null != this.pageScrollDuration &&
                (e.duration = this.pageScrollDuration),
              null != this.pageScrollSpeed && (e.speed = this.pageScrollSpeed),
              this.pageScrollFinish &&
                (e.scrollFinishListener = this.pageScrollFinish),
              (this.pageScrollInstance = this.pageScrollService.create(e));
          }
          return this.pageScrollInstance;
        }
        pushRouterState() {
          this.pageScrollAdjustHash &&
            'string' ==
              typeof this.pageScrollInstance.pageScrollOptions.scrollTarget &&
            '#' ===
              this.pageScrollInstance.pageScrollOptions.scrollTarget.substr(
                0,
                1
              ) &&
            this.router.navigate([], {
              fragment: this.pageScrollInstance.pageScrollOptions.scrollTarget.substr(
                1
              ),
              preserveQueryParams: !0,
            });
        }
        scroll() {
          const e = this.generatePageScrollInstance();
          this.pushRouterState(), this.pageScrollService.start(e);
        }
        handleClick(e) {
          if (this.routerLink && null != this.router) {
            let e;
            if (
              ((e =
                'string' == typeof this.routerLink
                  ? this.router.parseUrl(this.routerLink)
                  : this.router.createUrlTree(this.routerLink)),
              !this.router.isActive(e, !0))
            ) {
              const e = this.router.events.subscribe(t => {
                t instanceof lc
                  ? (e.unsubscribe(),
                    setTimeout(() => {
                      this.scroll();
                    }, 0))
                  : (t instanceof oc || t instanceof ic) && e.unsubscribe();
              });
              return !1;
            }
          }
          return this.scroll(), !1;
        }
      }
      class Fg {}
      class jg {
        constructor(e) {
          (this.startScrollPosition = 0),
            (this.interruptListenersAttached = !1),
            (this.timer = null),
            e.scrollViews && 0 !== e.scrollViews.length
              ? (this.isInlineScrolling = !0)
              : ((e.scrollViews = [
                  e.document.documentElement,
                  e.document.body,
                  e.document.body.parentNode,
                ]),
                (this.isInlineScrolling = !1)),
            (this.pageScrollOptions = e);
        }
        static getScrollingTargetPosition(e, t) {
          const n = e.document.body,
            r = e.document.documentElement,
            s =
              (e.document.defaultView && e.document.defaultView.pageYOffset) ||
              r.scrollTop ||
              n.scrollTop,
            l =
              (e.document.defaultView && e.document.defaultView.pageXOffset) ||
              r.scrollLeft ||
              n.scrollLeft,
            i = r.clientTop || n.clientTop || 0,
            o = r.clientLeft || n.clientLeft || 0;
          if (null == t) return { top: s, left: l };
          const a = t.getBoundingClientRect(),
            u = a.left + l - o;
          return { top: Math.round(a.top + s - i), left: Math.round(u) };
        }
        static getInlineScrollingTargetPosition(e, t) {
          const n = { top: t.offsetTop, left: t.offsetLeft };
          if (e.advancedInlineOffsetCalculation && 1 === e.scrollViews.length) {
            const r = { top: 0, left: 0 },
              s = t.ownerDocument.defaultView;
            let l = !1,
              i = t.parentElement;
            for (; !l && null != i; )
              'relative' ===
                s.getComputedStyle(i).getPropertyValue('position') &&
                ((r.top += i.offsetTop), (r.left += i.offsetLeft)),
                (l = (i = i.parentElement) === e.scrollViews[0]);
            l && ((n.top += r.top), (n.left += r.left));
          }
          return n;
        }
        getScrollPropertyValue(e) {
          return this.pageScrollOptions.verticalScrolling
            ? e.scrollTop
            : e.scrollLeft;
        }
        getScrollClientPropertyValue(e) {
          return this.pageScrollOptions.verticalScrolling
            ? e.clientHeight
            : e.clientWidth;
        }
        extractScrollTargetPosition() {
          const e = this.getScrollTargetElement();
          return null == e
            ? { top: NaN, left: NaN }
            : this.isInlineScrolling
            ? jg.getInlineScrollingTargetPosition(this.pageScrollOptions, e)
            : jg.getScrollingTargetPosition(this.pageScrollOptions, e);
        }
        getCurrentOffset() {
          return this.pageScrollOptions.scrollOffset;
        }
        setScrollPosition(e) {
          return this.pageScrollOptions.scrollViews.reduce((t, n) => {
            const r = this.getScrollPropertyValue(n);
            if (n && null != r) {
              const t = Math.abs(r - e),
                s = t < this.pageScrollOptions._minScrollDistance;
              if (
                (this.pageScrollOptions.verticalScrolling
                  ? (n.scrollTop = e)
                  : (n.scrollLeft = e),
                s || t > Math.abs(this.getScrollPropertyValue(n) - e))
              )
                return !0;
            }
            return t;
          }, !1);
        }
        fireEvent(e) {
          this.pageScrollOptions.scrollFinishListener &&
            this.pageScrollOptions.scrollFinishListener.emit(e);
        }
        attachInterruptListeners(e) {
          this.interruptListenersAttached && this.detachInterruptListeners(),
            (this.interruptListener = t => {
              e.report(t, this);
            }),
            this.pageScrollOptions.interruptEvents.forEach(e =>
              this.pageScrollOptions.document.body.addEventListener(
                e,
                this.interruptListener
              )
            ),
            (this.interruptListenersAttached = !0);
        }
        detachInterruptListeners() {
          this.pageScrollOptions.interruptEvents.forEach(e =>
            this.pageScrollOptions.document.body.removeEventListener(
              e,
              this.interruptListener
            )
          ),
            (this.interruptListenersAttached = !1);
        }
        getScrollTargetElement() {
          if ('string' == typeof this.pageScrollOptions.scrollTarget) {
            const e = this.pageScrollOptions.scrollTarget;
            return null !== e.match(/^#[^\s]+$/g)
              ? this.pageScrollOptions.document.getElementById(e.substr(1))
              : this.pageScrollOptions.document.querySelector(e);
          }
          return this.pageScrollOptions.scrollTarget;
        }
      }
      const $g = new ke('ngxps_config'),
        Hg = {
          _interval: 10,
          _minScrollDistance: 2,
          _logLevel: 1,
          namespace: 'default',
          verticalScrolling: !0,
          duration: 1250,
          scrollOffset: 0,
          advancedInlineOffsetCalculation: !1,
          interruptEvents: [
            'mousedown',
            'wheel',
            'DOMMouseScroll',
            'mousewheel',
            'keyup',
            'touchmove',
          ],
          interruptKeys: [
            ' ',
            'Escape',
            'Tab',
            'Enter',
            'PageUp',
            'PageDown',
            'Home',
            'End',
            'ArrowUp',
            'ArrowRight',
            'ArrowLeft',
            'ArrowDown',
          ],
          interruptible: !0,
          scrollInView: !0,
          easingLogic: (e, t, n, r) => (n * e) / r + t,
        };
      let zg = (() => {
        class e {
          constructor(t) {
            (this.runningInstances = []),
              (this.onInterrupted = {
                report: (e, t) => {
                  if (!t.pageScrollOptions.interruptible) return;
                  let n = !0;
                  'keyup' === e.type
                    ? -1 === this.config.interruptKeys.indexOf(e.key) &&
                      (n = !1)
                    : 'mousedown' === e.type &&
                      (t.pageScrollOptions.scrollViews.some(t =>
                        t.contains(e.target)
                      ) ||
                        (n = !1)),
                    n && this.stopAll(t.pageScrollOptions.namespace);
                },
              }),
              (this.config = Object.assign({}, Hg, t)),
              e.instanceCounter > 0 &&
                (this.config._logLevel >= 2 ||
                  (this.config._logLevel >= 1 && nt())) &&
                console.warn(
                  'An instance of PageScrollService already exists, usually including one provider should be enough, so double check.'
                ),
              e.instanceCounter++;
          }
          stopInternal(e, t) {
            const n = this.runningInstances.indexOf(t);
            return (
              n >= 0 && this.runningInstances.splice(n, 1),
              t.interruptListenersAttached && t.detachInterruptListeners(),
              !!t.timer &&
                (clearInterval(t.timer),
                (t.timer = void 0),
                t.fireEvent(!e),
                !0)
            );
          }
          create(e) {
            return new jg(Object.assign({}, this.config, e));
          }
          start(e) {
            if (
              ((e.pageScrollOptions = Object.assign(
                {},
                this.config,
                e.pageScrollOptions
              )),
              this.stopAll(e.pageScrollOptions.namespace),
              null === e.pageScrollOptions.scrollViews ||
                0 === e.pageScrollOptions.scrollViews.length)
            )
              return void (
                (this.config._logLevel >= 2 ||
                  (this.config._logLevel >= 1 && nt())) &&
                console.warn(
                  'No scrollViews specified, thus ngx-page-scroll does not know which DOM elements to scroll'
                )
              );
            let t = !1,
              n = e.getScrollClientPropertyValue(
                e.pageScrollOptions.scrollViews[0]
              );
            (e.startScrollPosition = 0),
              e.pageScrollOptions.scrollViews.forEach(r => {
                if (null == r) return;
                const s = e.getScrollPropertyValue(r);
                !t &&
                  s &&
                  ((e.startScrollPosition = s),
                  (t = !0),
                  (n = e.getScrollClientPropertyValue(r)));
              });
            const r = e.getCurrentOffset(),
              s = e.extractScrollTargetPosition();
            if (
              ((e.targetScrollPosition = Math.round(
                (e.pageScrollOptions.verticalScrolling ? s.top : s.left) - r
              )),
              (e.distanceToScroll =
                e.targetScrollPosition - e.startScrollPosition),
              isNaN(e.distanceToScroll))
            )
              return (
                (this.config._logLevel >= 2 ||
                  (this.config._logLevel >= 1 && nt())) &&
                  console.log(
                    "Scrolling not possible, as we can't find the specified target"
                  ),
                void e.fireEvent(!1)
              );
            const l =
              Math.abs(e.distanceToScroll) <
              e.pageScrollOptions._minScrollDistance;
            return (
              (e.executionDuration = e.pageScrollOptions.duration),
              null != e.pageScrollOptions.speed &&
                null == e.pageScrollOptions.duration &&
                (e.executionDuration =
                  (Math.abs(e.distanceToScroll) / e.pageScrollOptions.speed) *
                  1e3),
              l || e.executionDuration <= e.pageScrollOptions._interval
                ? ((this.config._logLevel >= 2 ||
                    (this.config._logLevel >= 1 && nt())) &&
                    (l
                      ? console.log(
                          "Scrolling not possible, as we can't get any closer to the destination"
                        )
                      : console.log(
                          'Scroll duration shorter that interval length, jumping to target'
                        )),
                  e.setScrollPosition(e.targetScrollPosition),
                  void e.fireEvent(!0))
                : !e.pageScrollOptions.scrollInView &&
                  e.targetScrollPosition > e.startScrollPosition &&
                  e.targetScrollPosition <= e.startScrollPosition + n
                ? ((this.config._logLevel >= 2 ||
                    (this.config._logLevel >= 1 && nt())) &&
                    console.log('Not scrolling, as target already in view'),
                  void e.fireEvent(!0))
                : (e.pageScrollOptions.interruptible &&
                    e.attachInterruptListeners(this.onInterrupted),
                  (e.startTime = new Date().getTime()),
                  (e.endTime = e.startTime + e.executionDuration),
                  (e.timer = setInterval(
                    e => {
                      const t = new Date().getTime();
                      let n,
                        r = !1;
                      e.endTime <= t
                        ? ((n = e.targetScrollPosition), (r = !0))
                        : (n = Math.round(
                            e.pageScrollOptions.easingLogic(
                              t - e.startTime,
                              e.startScrollPosition,
                              e.distanceToScroll,
                              e.executionDuration
                            )
                          )),
                        this.config._logLevel >= 5 &&
                          nt() &&
                          console.warn('Scroll Position: ' + n),
                        e.setScrollPosition(n) || (r = !0),
                        r && this.stopInternal(!1, e);
                    },
                    this.config._interval,
                    e
                  )),
                  void this.runningInstances.push(e))
            );
          }
          scroll(e) {
            this.start(this.create(e));
          }
          stopAll(e) {
            if (this.runningInstances.length > 0) {
              let t = !1;
              for (let n = 0; n < this.runningInstances.length; ++n) {
                const r = this.runningInstances[n];
                (e && r.pageScrollOptions.namespace !== e) ||
                  ((t = !0), this.stopInternal(!0, r), n--);
              }
              return t;
            }
            return !1;
          }
          stop(e) {
            return this.stopInternal(!0, e);
          }
        }
        return (
          (e.instanceCounter = 0),
          (e.ngInjectableDef = pe({
            factory: function() {
              return new e(Ue($g));
            },
            token: e,
            providedIn: 'root',
          })),
          e
        );
      })();
      class Bg {
        static forRoot(e) {
          return {
            ngModule: Bg,
            providers: [zg, { provide: $g, useValue: e }],
          };
        }
      }
      var qg,
        Gg = document.body;
      function Wg() {
        window.addEventListener(
          'scroll',
          function() {
            clearTimeout(qg),
              Gg.classList.contains('disable-hover') ||
                Gg.classList.add('disable-hover'),
              (qg = setTimeout(function() {
                Gg.classList.remove('disable-hover');
              }, 500));
          },
          !1
        );
      }
      console.log('utils', Wg);
      class Zg {
        constructor(e, t, n) {
          (this.petName = e), (this.officialName = t), (this.rating = n);
        }
      }
      class Qg {
        constructor(e) {
          (this.myFormBuilder = e),
            (this.ratings = [...Array(10).keys()]),
            (this.doggo = new Zg('BooBoo', 'Buster', 8)),
            (this.submitted = !1),
            (this.reactiveMarkdown =
              "myReactiveForm = new FormGroup({\n    rating: new FormControl(''),\n    name: new FormGroup({\n      officialName: new FormControl(''),\n      petName: new FormControl(''),\n    })\n  });"),
            (this.builderMarkdown =
              "myReactiveFormBuilder = this.myFormBuilder.group({\n    rating: [''],\n    name: this.myFormBuilder.group({\n      officialName: [''],\n      petName: [''],\n    })\n  });\n\n\nconstructor(private myFormBuilder: FormBuilder) { }"),
            (this.myReactiveForm = new mg({
              rating: new fg(''),
              name: new mg({ officialName: new fg(''), petName: new fg('') }),
            })),
            (this.myReactiveFormBuilder = this.myFormBuilder.group({
              rating: [''],
              name: this.myFormBuilder.group({
                officialName: [''],
                petName: [''],
              }),
            }));
        }
        onSubmit() {
          this.submitted = !0;
        }
        newDoggo() {
          this.doggo = new Zg('', '', 0);
        }
        get diagnostic() {
          return JSON.stringify(this.doggo);
        }
        ngOnInit() {
          Wg();
        }
      }
      var Kg = tr({ encapsulation: 0, styles: [['']], data: {} });
      function Jg(e) {
        return fi(
          0,
          [
            (e()(),
            Yl(
              0,
              0,
              null,
              null,
              3,
              'option',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            us(
              1,
              147456,
              null,
              0,
              qp,
              [cn, fn, [2, Bp]],
              { value: [0, 'value'] },
              null
            ),
            us(
              2,
              147456,
              null,
              0,
              Wp,
              [cn, fn, [8, null]],
              { value: [0, 'value'] },
              null
            ),
            (e()(), di(3, null, ['', ''])),
          ],
          function(e, t) {
            e(t, 1, 0, t.context.$implicit), e(t, 2, 0, t.context.$implicit);
          },
          function(e, t) {
            e(t, 3, 0, t.context.$implicit);
          }
        );
      }
      function Yg(e) {
        return fi(
          0,
          [
            cs(0, np, []),
            (e()(),
            Yl(
              1,
              0,
              null,
              null,
              1,
              'h1',
              [
                ['class', 'text-3xl'],
                ['id', 'top'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Forms'])),
            (e()(),
            Yl(
              3,
              0,
              null,
              null,
              0,
              'hr',
              [['class', 'bg-accent h-1 w-full mb-4']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              4,
              0,
              null,
              null,
              1,
              'h4',
              [['class', 'text-lg text-secondary font-bold']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Contents:'])),
            (e()(),
            Yl(
              6,
              0,
              null,
              null,
              2,
              'a',
              [
                ['class', 'content block my-1 p-1 hover:bg-white'],
                ['href', '#reactive-forms'],
                ['pageScroll', ''],
              ],
              null,
              [[null, 'click']],
              function(e, t, n) {
                var r = !0;
                return (
                  'click' === t && (r = !1 !== Kr(e, 7).handleClick(n) && r), r
                );
              },
              null,
              null
            )),
            us(
              7,
              671744,
              null,
              0,
              Ug,
              [zg, [2, Cd], zo],
              {
                href: [0, 'href'],
                pageScrollDuration: [1, 'pageScrollDuration'],
                pageScroll: [2, 'pageScroll'],
              },
              null
            ),
            (e()(), di(-1, null, ['Reactive Forms'])),
            (e()(),
            Yl(
              9,
              0,
              null,
              null,
              2,
              'a',
              [
                ['class', 'content block my-1 p-1 hover:bg-white'],
                ['href', '#form-group'],
                ['pageScroll', ''],
              ],
              null,
              [[null, 'click']],
              function(e, t, n) {
                var r = !0;
                return (
                  'click' === t && (r = !1 !== Kr(e, 10).handleClick(n) && r), r
                );
              },
              null,
              null
            )),
            us(
              10,
              671744,
              null,
              0,
              Ug,
              [zg, [2, Cd], zo],
              {
                href: [0, 'href'],
                pageScrollDuration: [1, 'pageScrollDuration'],
                pageScroll: [2, 'pageScroll'],
              },
              null
            ),
            (e()(), di(-1, null, ['FormGroup & FormControl'])),
            (e()(),
            Yl(
              12,
              0,
              null,
              null,
              2,
              'a',
              [
                ['class', 'content block my-1 p-1 hover:bg-white'],
                ['href', '#form-builder'],
                ['pageScroll', ''],
              ],
              null,
              [[null, 'click']],
              function(e, t, n) {
                var r = !0;
                return (
                  'click' === t && (r = !1 !== Kr(e, 13).handleClick(n) && r), r
                );
              },
              null,
              null
            )),
            us(
              13,
              671744,
              null,
              0,
              Ug,
              [zg, [2, Cd], zo],
              {
                href: [0, 'href'],
                pageScrollDuration: [1, 'pageScrollDuration'],
                pageScroll: [2, 'pageScroll'],
              },
              null
            ),
            (e()(), di(-1, null, ['FormBuilder'])),
            (e()(),
            Yl(
              15,
              0,
              null,
              null,
              2,
              'a',
              [
                ['class', 'content block my-1 p-1 hover:bg-white'],
                ['href', '#validation'],
                ['pageScroll', ''],
              ],
              null,
              [[null, 'click']],
              function(e, t, n) {
                var r = !0;
                return (
                  'click' === t && (r = !1 !== Kr(e, 16).handleClick(n) && r), r
                );
              },
              null,
              null
            )),
            us(
              16,
              671744,
              null,
              0,
              Ug,
              [zg, [2, Cd], zo],
              {
                href: [0, 'href'],
                pageScrollDuration: [1, 'pageScrollDuration'],
                pageScroll: [2, 'pageScroll'],
              },
              null
            ),
            (e()(), di(-1, null, ['Validation'])),
            (e()(),
            Yl(
              18,
              0,
              null,
              null,
              2,
              'a',
              [
                ['class', 'content block my-1 p-1 hover:bg-white'],
                ['href', '#tests'],
                ['pageScroll', ''],
              ],
              null,
              [[null, 'click']],
              function(e, t, n) {
                var r = !0;
                return (
                  'click' === t && (r = !1 !== Kr(e, 19).handleClick(n) && r), r
                );
              },
              null,
              null
            )),
            us(
              19,
              671744,
              null,
              0,
              Ug,
              [zg, [2, Cd], zo],
              {
                href: [0, 'href'],
                pageScrollDuration: [1, 'pageScrollDuration'],
                pageScroll: [2, 'pageScroll'],
              },
              null
            ),
            (e()(), di(-1, null, ['Tests'])),
            (e()(),
            Yl(
              21,
              0,
              null,
              null,
              2,
              'a',
              [
                ['class', 'content block my-1 p-1 hover:bg-white'],
                ['href', '#template'],
                ['pageScroll', ''],
              ],
              null,
              [[null, 'click']],
              function(e, t, n) {
                var r = !0;
                return (
                  'click' === t && (r = !1 !== Kr(e, 22).handleClick(n) && r), r
                );
              },
              null,
              null
            )),
            us(
              22,
              671744,
              null,
              0,
              Ug,
              [zg, [2, Cd], zo],
              {
                href: [0, 'href'],
                pageScrollDuration: [1, 'pageScrollDuration'],
                pageScroll: [2, 'pageScroll'],
              },
              null
            ),
            (e()(), di(-1, null, ['Template Forms'])),
            (e()(),
            Yl(
              24,
              0,
              null,
              null,
              2,
              'a',
              [
                ['class', 'content block my-1 p-1 hover:bg-white'],
                ['href', '#section1'],
                ['pageScroll', ''],
              ],
              null,
              [[null, 'click']],
              function(e, t, n) {
                var r = !0;
                return (
                  'click' === t && (r = !1 !== Kr(e, 25).handleClick(n) && r), r
                );
              },
              null,
              null
            )),
            us(
              25,
              671744,
              null,
              0,
              Ug,
              [zg, [2, Cd], zo],
              {
                href: [0, 'href'],
                pageScrollDuration: [1, 'pageScrollDuration'],
                pageScroll: [2, 'pageScroll'],
              },
              null
            ),
            (e()(), di(-1, null, ['FormGroup & FormControl'])),
            (e()(),
            Yl(
              27,
              0,
              null,
              null,
              1,
              'h3',
              [
                ['class', 'text-2xl mt-4'],
                ['id', 'reactive-forms'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Reactive Forms'])),
            (e()(),
            Yl(
              29,
              0,
              null,
              null,
              0,
              'hr',
              [['class', 'bg-primary h-1 w-full mb-4']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              30,
              0,
              null,
              null,
              19,
              'div',
              [['class', 'w-full bg-white py-2 px-4 my-2 rounded']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              31,
              0,
              null,
              null,
              2,
              'h4',
              [['class', 'text-lg']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(32, 0, null, null, 1, 'mark', [], null, null, null, null, null)),
            (e()(), di(-1, null, ['What & Why?'])),
            (e()(),
            Yl(
              34,
              0,
              null,
              null,
              15,
              'ul',
              [['class', 'list-none list-outside p-2']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              35,
              0,
              null,
              null,
              1,
              'li',
              [['class', 'my-2 bullet']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            di(-1, null, [
              ' Suited for complex/dynamic forms -> reactive updates -> better UX ',
            ])),
            (e()(),
            Yl(
              37,
              0,
              null,
              null,
              6,
              'li',
              [['class', 'mb-2 bullet']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, [' Uses observables/functional-style '])),
            (e()(),
            Yl(39, 0, null, null, 1, 'mark', [], null, null, null, null, null)),
            (e()(), di(-1, null, ['ReactiveFormsModule'])),
            (e()(),
            di(-1, null, [
              " (import from '@angular/forms' & add to app.module.ts imports array) ",
            ])),
            (e()(),
            Yl(
              42,
              0,
              null,
              null,
              1,
              'a',
              [
                ['href', 'https://angular.io/api/forms/ReactiveFormsModule'],
                ['rel', 'noopener noreferrer'],
                ['target', '_blank'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['ReactiveFormsModule'])),
            (e()(),
            Yl(
              44,
              0,
              null,
              null,
              1,
              'li',
              [['class', 'mb-2 bullet']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            di(-1, null, [
              ' Logic resides in component, rather than in template -> easier to see (not obscured by CSS classes, HTML attributes etc.) ',
            ])),
            (e()(),
            Yl(
              46,
              0,
              null,
              null,
              1,
              'li',
              [['class', 'mb-2 bullet']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            di(-1, null, [
              ' Synchronous, so no need to check what exists before validating ',
            ])),
            (e()(),
            Yl(
              48,
              0,
              null,
              null,
              1,
              'li',
              [['class', 'mb-2 bullet']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, [' Easier to test... '])),
            (e()(),
            Yl(
              50,
              0,
              null,
              null,
              2,
              'a',
              [
                [
                  'class',
                  'inline-block my-1 mb-4 p-1 bg-backgroundDark text-white',
                ],
                ['href', '#top'],
                ['pageScroll', ''],
              ],
              null,
              [[null, 'click']],
              function(e, t, n) {
                var r = !0;
                return (
                  'click' === t && (r = !1 !== Kr(e, 51).handleClick(n) && r), r
                );
              },
              null,
              null
            )),
            us(
              51,
              671744,
              null,
              0,
              Ug,
              [zg, [2, Cd], zo],
              {
                href: [0, 'href'],
                pageScrollDuration: [1, 'pageScrollDuration'],
                pageScroll: [2, 'pageScroll'],
              },
              null
            ),
            (e()(), di(-1, null, ['To Top'])),
            (e()(),
            Yl(
              53,
              0,
              null,
              null,
              1,
              'h4',
              [
                ['class', 'text-xl'],
                ['id', 'form-group'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['With FormGroup & FormControl'])),
            (e()(),
            Yl(
              55,
              0,
              null,
              null,
              0,
              'hr',
              [['class', 'bg-secondary h-1 w-full mb-4']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              56,
              0,
              null,
              null,
              27,
              'div',
              [['class', 'w-full bg-white py-2 px-4 my-2 rounded']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              57,
              0,
              null,
              null,
              26,
              'ul',
              [['class', 'list-none list-outside p-2']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              58,
              0,
              null,
              null,
              7,
              'li',
              [['class', 'my-2 bullet']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, [' Import '])),
            (e()(),
            Yl(60, 0, null, null, 1, 'mark', [], null, null, null, null, null)),
            (e()(), di(-1, null, ['FormGroup'])),
            (e()(), di(-1, null, [', '])),
            (e()(),
            Yl(63, 0, null, null, 1, 'mark', [], null, null, null, null, null)),
            (e()(), di(-1, null, ['FormControl'])),
            (e()(),
            di(-1, null, [
              " from '@angular/forms' into your specific component.ts ",
            ])),
            (e()(),
            Yl(
              66,
              0,
              null,
              null,
              3,
              'li',
              [['class', 'mb-2 bullet']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(67, 0, null, null, 1, 'mark', [], null, null, null, null, null)),
            (e()(), di(-1, null, ['[formGroup]'])),
            (e()(),
            di(-1, null, [' = directive that connects form to component '])),
            (e()(),
            Yl(
              70,
              0,
              null,
              null,
              3,
              'li',
              [['class', 'mb-2 bullet']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(71, 0, null, null, 1, 'mark', [], null, null, null, null, null)),
            (e()(), di(-1, null, ['formGroup'])),
            (e()(),
            di(-1, null, [
              ' = directive that groups nested values inside overall form ',
            ])),
            (e()(),
            Yl(
              74,
              0,
              null,
              null,
              3,
              'li',
              [['class', 'mb-2 bullet']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(75, 0, null, null, 1, 'mark', [], null, null, null, null, null)),
            (e()(), di(-1, null, ['formControlName'])),
            (e()(),
            di(-1, null, [
              ' = directives that bind inputs to form controls defined inside FormGroup & communicate changes ',
            ])),
            (e()(),
            Yl(
              78,
              0,
              null,
              null,
              3,
              'li',
              [['class', 'mb-2 bullet']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(79, 0, null, null, 1, 'mark', [], null, null, null, null, null)),
            (e()(), di(-1, null, ['(ngSubmit)'])),
            (e()(), di(-1, null, [' = event listener w callback method '])),
            (e()(),
            Yl(
              82,
              0,
              null,
              null,
              1,
              'li',
              [['class', 'mb-2 bullet']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            di(-1, null, [' Button of type submit = triggers submission '])),
            (e()(),
            Yl(
              84,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'w-full my-2']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(85, 0, null, null, 3, 'markdown', [], null, null, null, pp, dp)),
            us(86, 4767744, null, 0, up, [cn, op], { data: [0, 'data'] }, null),
            ui(87, 2),
            (e()(), di(-1, 0, ['\n  '])),
            (e()(),
            Yl(
              89,
              0,
              null,
              null,
              39,
              'form',
              [
                [
                  'class',
                  'w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4',
                ],
                ['novalidate', ''],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'ngSubmit'],
                [null, 'submit'],
                [null, 'reset'],
              ],
              function(e, t, n) {
                var r = !0,
                  s = e.component;
                return (
                  'submit' === t && (r = !1 !== Kr(e, 91).onSubmit(n) && r),
                  'reset' === t && (r = !1 !== Kr(e, 91).onReset() && r),
                  'ngSubmit' === t && (r = !1 !== s.onSubmit() && r),
                  r
                );
              },
              null,
              null
            )),
            us(90, 16384, null, 0, Eg, [], null, null),
            us(
              91,
              540672,
              null,
              0,
              Ag,
              [
                [8, null],
                [8, null],
              ],
              { form: [0, 'form'] },
              { ngSubmit: 'ngSubmit' }
            ),
            hs(2048, null, Sp, null, [Ag]),
            us(93, 16384, null, 0, Np, [[4, Sp]], null, null),
            (e()(),
            Yl(
              94,
              0,
              null,
              null,
              21,
              'div',
              [['formGroupName', 'name']],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              null,
              null,
              null,
              null
            )),
            us(
              95,
              212992,
              null,
              0,
              Ng,
              [
                [3, Sp],
                [8, null],
                [8, null],
              ],
              { name: [0, 'name'] },
              null
            ),
            hs(2048, null, Sp, null, [Ng]),
            us(97, 16384, null, 0, Np, [[4, Sp]], null, null),
            (e()(),
            Yl(
              98,
              0,
              null,
              null,
              1,
              'h2',
              [['class', 'block text-gray-700 text-lg font-bold mb-2']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Name'])),
            (e()(),
            Yl(
              100,
              0,
              null,
              null,
              7,
              'label',
              [['class', 'block text-gray-700 text-sm font-bold mb-2']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, [' Official Name: '])),
            (e()(),
            Yl(
              102,
              0,
              null,
              null,
              5,
              'input',
              [
                [
                  'class',
                  'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal',
                ],
                ['formControlName', 'officialName'],
                ['type', 'text'],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
              ],
              function(e, t, n) {
                var r = !0;
                return (
                  'input' === t &&
                    (r = !1 !== Kr(e, 103)._handleInput(n.target.value) && r),
                  'blur' === t && (r = !1 !== Kr(e, 103).onTouched() && r),
                  'compositionstart' === t &&
                    (r = !1 !== Kr(e, 103)._compositionStart() && r),
                  'compositionend' === t &&
                    (r =
                      !1 !== Kr(e, 103)._compositionEnd(n.target.value) && r),
                  r
                );
              },
              null,
              null
            )),
            us(103, 16384, null, 0, Cp, [fn, cn, [2, wp]], null, null),
            hs(
              1024,
              null,
              _p,
              function(e) {
                return [e];
              },
              [Cp]
            ),
            us(
              105,
              671744,
              null,
              0,
              Rg,
              [
                [3, Sp],
                [8, null],
                [8, null],
                [6, _p],
                [2, Tg],
              ],
              { name: [0, 'name'] },
              null
            ),
            hs(2048, null, Ep, null, [Rg]),
            us(107, 16384, null, 0, Ap, [[4, Ep]], null, null),
            (e()(),
            Yl(
              108,
              0,
              null,
              null,
              7,
              'label',
              [['class', 'block text-gray-700 text-sm font-bold mb-2']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, [' Pet Name: '])),
            (e()(),
            Yl(
              110,
              0,
              null,
              null,
              5,
              'input',
              [
                [
                  'class',
                  'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal',
                ],
                ['formControlName', 'petName'],
                ['type', 'text'],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
              ],
              function(e, t, n) {
                var r = !0;
                return (
                  'input' === t &&
                    (r = !1 !== Kr(e, 111)._handleInput(n.target.value) && r),
                  'blur' === t && (r = !1 !== Kr(e, 111).onTouched() && r),
                  'compositionstart' === t &&
                    (r = !1 !== Kr(e, 111)._compositionStart() && r),
                  'compositionend' === t &&
                    (r =
                      !1 !== Kr(e, 111)._compositionEnd(n.target.value) && r),
                  r
                );
              },
              null,
              null
            )),
            us(111, 16384, null, 0, Cp, [fn, cn, [2, wp]], null, null),
            hs(
              1024,
              null,
              _p,
              function(e) {
                return [e];
              },
              [Cp]
            ),
            us(
              113,
              671744,
              null,
              0,
              Rg,
              [
                [3, Sp],
                [8, null],
                [8, null],
                [6, _p],
                [2, Tg],
              ],
              { name: [0, 'name'] },
              null
            ),
            hs(2048, null, Ep, null, [Rg]),
            us(115, 16384, null, 0, Ap, [[4, Ep]], null, null),
            (e()(),
            Yl(
              116,
              0,
              null,
              null,
              1,
              'h2',
              [['class', 'block text-gray-700 text-lg font-bold mb-2']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Rating'])),
            (e()(),
            Yl(
              118,
              0,
              null,
              null,
              8,
              'label',
              [['class', 'block text-gray-700 text-sm font-bold mb-2']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, [' Mark out of 10 '])),
            (e()(),
            Yl(
              120,
              0,
              null,
              null,
              6,
              'input',
              [
                [
                  'class',
                  'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal',
                ],
                ['formControlName', 'rating'],
                ['type', 'text'],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
                [null, 'change'],
              ],
              function(e, t, n) {
                var r = !0;
                return (
                  'input' === t &&
                    (r = !1 !== Kr(e, 121)._handleInput(n.target.value) && r),
                  'blur' === t && (r = !1 !== Kr(e, 121).onTouched() && r),
                  'compositionstart' === t &&
                    (r = !1 !== Kr(e, 121)._compositionStart() && r),
                  'compositionend' === t &&
                    (r =
                      !1 !== Kr(e, 121)._compositionEnd(n.target.value) && r),
                  'change' === t &&
                    (r = !1 !== Kr(e, 122).onChange(n.target.value) && r),
                  'input' === t &&
                    (r = !1 !== Kr(e, 122).onChange(n.target.value) && r),
                  'blur' === t && (r = !1 !== Kr(e, 122).onTouched() && r),
                  r
                );
              },
              null,
              null
            )),
            us(121, 16384, null, 0, Cp, [fn, cn, [2, wp]], null, null),
            us(122, 16384, null, 0, Fp, [fn, cn], null, null),
            hs(
              1024,
              null,
              _p,
              function(e, t) {
                return [e, t];
              },
              [Cp, Fp]
            ),
            us(
              124,
              671744,
              null,
              0,
              Rg,
              [
                [3, Sp],
                [8, null],
                [8, null],
                [6, _p],
                [2, Tg],
              ],
              { name: [0, 'name'] },
              null
            ),
            hs(2048, null, Ep, null, [Rg]),
            us(126, 16384, null, 0, Ap, [[4, Ep]], null, null),
            (e()(),
            Yl(
              127,
              0,
              null,
              null,
              1,
              'button',
              [
                [
                  'class',
                  'bg-primary hover:bg-accent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',
                ],
                ['type', 'submit'],
              ],
              [[8, 'disabled', 0]],
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Submit'])),
            (e()(),
            Yl(
              129,
              0,
              null,
              null,
              2,
              'a',
              [
                [
                  'class',
                  'inline-block my-1 mb-4 p-1 bg-backgroundDark text-white',
                ],
                ['href', '#top'],
                ['pageScroll', ''],
              ],
              null,
              [[null, 'click']],
              function(e, t, n) {
                var r = !0;
                return (
                  'click' === t && (r = !1 !== Kr(e, 130).handleClick(n) && r),
                  r
                );
              },
              null,
              null
            )),
            us(
              130,
              671744,
              null,
              0,
              Ug,
              [zg, [2, Cd], zo],
              {
                href: [0, 'href'],
                pageScrollDuration: [1, 'pageScrollDuration'],
                pageScroll: [2, 'pageScroll'],
              },
              null
            ),
            (e()(), di(-1, null, ['To Top'])),
            (e()(),
            Yl(
              132,
              0,
              null,
              null,
              1,
              'h4',
              [
                ['class', 'text-xl'],
                ['id', 'form-builder'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['With FormBuilder'])),
            (e()(),
            Yl(
              134,
              0,
              null,
              null,
              0,
              'hr',
              [['class', 'bg-secondary h-1 w-full mb-4']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              135,
              0,
              null,
              null,
              7,
              'div',
              [['class', 'w-full bg-white py-2 px-4 my-2']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              136,
              0,
              null,
              null,
              6,
              'ul',
              [['class', 'list-disc list-outside p-2']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              137,
              0,
              null,
              null,
              3,
              'li',
              [['class', 'my-2 bullet']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              138,
              0,
              null,
              null,
              1,
              'mark',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['FormBuilder'])),
            (e()(),
            di(-1, null, [
              ' - injectable service providing factory methods for creating control instances (shorthand) ',
            ])),
            (e()(),
            Yl(
              141,
              0,
              null,
              null,
              1,
              'li',
              [['class', 'mb-2 bullet']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            di(-1, null, [
              " Import FormBuilder from '@angular/forms' & inject into contructor prefixed by 'private' to create & initialize ",
            ])),
            (e()(),
            Yl(
              143,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'w-full my-2 rounded']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              144,
              0,
              null,
              null,
              3,
              'markdown',
              [],
              null,
              null,
              null,
              pp,
              dp
            )),
            us(
              145,
              4767744,
              null,
              0,
              up,
              [cn, op],
              { data: [0, 'data'] },
              null
            ),
            ui(146, 2),
            (e()(), di(-1, 0, ['\n  '])),
            (e()(),
            Yl(
              148,
              0,
              null,
              null,
              39,
              'form',
              [
                [
                  'class',
                  'w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4',
                ],
                ['novalidate', ''],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'ngSubmit'],
                [null, 'submit'],
                [null, 'reset'],
              ],
              function(e, t, n) {
                var r = !0,
                  s = e.component;
                return (
                  'submit' === t && (r = !1 !== Kr(e, 150).onSubmit(n) && r),
                  'reset' === t && (r = !1 !== Kr(e, 150).onReset() && r),
                  'ngSubmit' === t && (r = !1 !== s.onSubmit() && r),
                  r
                );
              },
              null,
              null
            )),
            us(149, 16384, null, 0, Eg, [], null, null),
            us(
              150,
              540672,
              null,
              0,
              Ag,
              [
                [8, null],
                [8, null],
              ],
              { form: [0, 'form'] },
              { ngSubmit: 'ngSubmit' }
            ),
            hs(2048, null, Sp, null, [Ag]),
            us(152, 16384, null, 0, Np, [[4, Sp]], null, null),
            (e()(),
            Yl(
              153,
              0,
              null,
              null,
              21,
              'div',
              [['formGroupName', 'name']],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              null,
              null,
              null,
              null
            )),
            us(
              154,
              212992,
              null,
              0,
              Ng,
              [
                [3, Sp],
                [8, null],
                [8, null],
              ],
              { name: [0, 'name'] },
              null
            ),
            hs(2048, null, Sp, null, [Ng]),
            us(156, 16384, null, 0, Np, [[4, Sp]], null, null),
            (e()(),
            Yl(
              157,
              0,
              null,
              null,
              1,
              'h2',
              [['class', 'block text-gray-700 text-lg font-bold mb-2']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Name'])),
            (e()(),
            Yl(
              159,
              0,
              null,
              null,
              7,
              'label',
              [['class', 'block text-gray-700 text-sm font-bold mb-2']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, [' Official Name: '])),
            (e()(),
            Yl(
              161,
              0,
              null,
              null,
              5,
              'input',
              [
                [
                  'class',
                  'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal',
                ],
                ['formControlName', 'officialName'],
                ['type', 'text'],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
              ],
              function(e, t, n) {
                var r = !0;
                return (
                  'input' === t &&
                    (r = !1 !== Kr(e, 162)._handleInput(n.target.value) && r),
                  'blur' === t && (r = !1 !== Kr(e, 162).onTouched() && r),
                  'compositionstart' === t &&
                    (r = !1 !== Kr(e, 162)._compositionStart() && r),
                  'compositionend' === t &&
                    (r =
                      !1 !== Kr(e, 162)._compositionEnd(n.target.value) && r),
                  r
                );
              },
              null,
              null
            )),
            us(162, 16384, null, 0, Cp, [fn, cn, [2, wp]], null, null),
            hs(
              1024,
              null,
              _p,
              function(e) {
                return [e];
              },
              [Cp]
            ),
            us(
              164,
              671744,
              null,
              0,
              Rg,
              [
                [3, Sp],
                [8, null],
                [8, null],
                [6, _p],
                [2, Tg],
              ],
              { name: [0, 'name'] },
              null
            ),
            hs(2048, null, Ep, null, [Rg]),
            us(166, 16384, null, 0, Ap, [[4, Ep]], null, null),
            (e()(),
            Yl(
              167,
              0,
              null,
              null,
              7,
              'label',
              [['class', 'block text-gray-700 text-sm font-bold mb-2']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, [' Pet Name: '])),
            (e()(),
            Yl(
              169,
              0,
              null,
              null,
              5,
              'input',
              [
                [
                  'class',
                  'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal',
                ],
                ['formControlName', 'petName'],
                ['type', 'text'],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
              ],
              function(e, t, n) {
                var r = !0;
                return (
                  'input' === t &&
                    (r = !1 !== Kr(e, 170)._handleInput(n.target.value) && r),
                  'blur' === t && (r = !1 !== Kr(e, 170).onTouched() && r),
                  'compositionstart' === t &&
                    (r = !1 !== Kr(e, 170)._compositionStart() && r),
                  'compositionend' === t &&
                    (r =
                      !1 !== Kr(e, 170)._compositionEnd(n.target.value) && r),
                  r
                );
              },
              null,
              null
            )),
            us(170, 16384, null, 0, Cp, [fn, cn, [2, wp]], null, null),
            hs(
              1024,
              null,
              _p,
              function(e) {
                return [e];
              },
              [Cp]
            ),
            us(
              172,
              671744,
              null,
              0,
              Rg,
              [
                [3, Sp],
                [8, null],
                [8, null],
                [6, _p],
                [2, Tg],
              ],
              { name: [0, 'name'] },
              null
            ),
            hs(2048, null, Ep, null, [Rg]),
            us(174, 16384, null, 0, Ap, [[4, Ep]], null, null),
            (e()(),
            Yl(
              175,
              0,
              null,
              null,
              1,
              'h2',
              [['class', 'block text-gray-700 text-lg font-bold mb-2']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Rating'])),
            (e()(),
            Yl(
              177,
              0,
              null,
              null,
              8,
              'label',
              [['class', 'block text-gray-700 text-sm font-bold mb-2']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, [' Marks out of 10 '])),
            (e()(),
            Yl(
              179,
              0,
              null,
              null,
              6,
              'input',
              [
                [
                  'class',
                  'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal',
                ],
                ['formControlName', 'rating'],
                ['type', 'text'],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
                [null, 'change'],
              ],
              function(e, t, n) {
                var r = !0;
                return (
                  'input' === t &&
                    (r = !1 !== Kr(e, 180)._handleInput(n.target.value) && r),
                  'blur' === t && (r = !1 !== Kr(e, 180).onTouched() && r),
                  'compositionstart' === t &&
                    (r = !1 !== Kr(e, 180)._compositionStart() && r),
                  'compositionend' === t &&
                    (r =
                      !1 !== Kr(e, 180)._compositionEnd(n.target.value) && r),
                  'change' === t &&
                    (r = !1 !== Kr(e, 181).onChange(n.target.value) && r),
                  'input' === t &&
                    (r = !1 !== Kr(e, 181).onChange(n.target.value) && r),
                  'blur' === t && (r = !1 !== Kr(e, 181).onTouched() && r),
                  r
                );
              },
              null,
              null
            )),
            us(180, 16384, null, 0, Cp, [fn, cn, [2, wp]], null, null),
            us(181, 16384, null, 0, Fp, [fn, cn], null, null),
            hs(
              1024,
              null,
              _p,
              function(e, t) {
                return [e, t];
              },
              [Cp, Fp]
            ),
            us(
              183,
              671744,
              null,
              0,
              Rg,
              [
                [3, Sp],
                [8, null],
                [8, null],
                [6, _p],
                [2, Tg],
              ],
              { name: [0, 'name'] },
              null
            ),
            hs(2048, null, Ep, null, [Rg]),
            us(185, 16384, null, 0, Ap, [[4, Ep]], null, null),
            (e()(),
            Yl(
              186,
              0,
              null,
              null,
              1,
              'button',
              [
                [
                  'class',
                  'bg-primary hover:bg-accent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',
                ],
                ['type', 'submit'],
              ],
              [[8, 'disabled', 0]],
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Submit'])),
            (e()(),
            Yl(
              188,
              0,
              null,
              null,
              2,
              'a',
              [
                [
                  'class',
                  'inline-block my-1 mb-4 p-1 bg-backgroundDark text-white',
                ],
                ['href', '#top'],
                ['pageScroll', ''],
              ],
              null,
              [[null, 'click']],
              function(e, t, n) {
                var r = !0;
                return (
                  'click' === t && (r = !1 !== Kr(e, 189).handleClick(n) && r),
                  r
                );
              },
              null,
              null
            )),
            us(
              189,
              671744,
              null,
              0,
              Ug,
              [zg, [2, Cd], zo],
              {
                href: [0, 'href'],
                pageScrollDuration: [1, 'pageScrollDuration'],
                pageScroll: [2, 'pageScroll'],
              },
              null
            ),
            (e()(), di(-1, null, ['To Top'])),
            (e()(),
            Yl(
              191,
              0,
              null,
              null,
              1,
              'h4',
              [
                ['class', 'text-xl'],
                ['id', 'validation'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Validation'])),
            (e()(),
            Yl(
              193,
              0,
              null,
              null,
              0,
              'hr',
              [['class', 'bg-secondary h-1 w-full mb-4']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              194,
              0,
              null,
              null,
              41,
              'div',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              195,
              0,
              null,
              null,
              1,
              'p',
              [['class', 'content']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            di(-1, null, [
              'You can track the state of your form with formName.status',
            ])),
            (e()(),
            Yl(
              197,
              0,
              null,
              null,
              1,
              'p',
              [['class', 'content']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            di(-1, null, [
              'Angular has special css classes that change along with the status',
            ])),
            (e()(),
            Yl(
              199,
              0,
              null,
              null,
              36,
              'table',
              [['class', 'text-left w-full border-collapse']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              200,
              0,
              null,
              null,
              7,
              'thead',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(201, 0, null, null, 6, 'tr', [], null, null, null, null, null)),
            (e()(),
            Yl(
              202,
              0,
              null,
              null,
              1,
              'th',
              [
                [
                  'class',
                  'py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light',
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Status'])),
            (e()(),
            Yl(
              204,
              0,
              null,
              null,
              1,
              'th',
              [
                [
                  'class',
                  'py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light',
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['If True'])),
            (e()(),
            Yl(
              206,
              0,
              null,
              null,
              1,
              'th',
              [
                [
                  'class',
                  'py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light',
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['If False'])),
            (e()(),
            Yl(
              208,
              0,
              null,
              null,
              27,
              'tbody',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              209,
              0,
              null,
              null,
              8,
              'tr',
              [['class', 'hover:bg-grey-lighter']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              210,
              0,
              null,
              null,
              1,
              'td',
              [['class', 'py-4 px-6 border-b border-grey-light']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Control has been visited'])),
            (e()(),
            Yl(
              212,
              0,
              null,
              null,
              2,
              'td',
              [['class', 'py-4 px-6 border-b border-grey-light']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              213,
              0,
              null,
              null,
              1,
              'p',
              [
                [
                  'class',
                  'text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark',
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['ng-touched'])),
            (e()(),
            Yl(
              215,
              0,
              null,
              null,
              2,
              'td',
              [['class', 'py-4 px-6 border-b border-grey-light']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              216,
              0,
              null,
              null,
              1,
              'p',
              [
                [
                  'class',
                  'text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark',
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['ng-untouched'])),
            (e()(),
            Yl(
              218,
              0,
              null,
              null,
              8,
              'tr',
              [['class', 'hover:bg-grey-lighter']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              219,
              0,
              null,
              null,
              1,
              'td',
              [['class', 'py-4 px-6 border-b border-grey-light']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Control value has changed'])),
            (e()(),
            Yl(
              221,
              0,
              null,
              null,
              2,
              'td',
              [['class', 'py-4 px-6 border-b border-grey-light']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              222,
              0,
              null,
              null,
              1,
              'p',
              [
                [
                  'class',
                  'text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark',
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['ng-dirty'])),
            (e()(),
            Yl(
              224,
              0,
              null,
              null,
              2,
              'td',
              [['class', 'py-4 px-6 border-b border-grey-light']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              225,
              0,
              null,
              null,
              1,
              'p',
              [
                [
                  'class',
                  'text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark',
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['ng-pristine'])),
            (e()(),
            Yl(
              227,
              0,
              null,
              null,
              8,
              'tr',
              [['class', 'hover:bg-grey-lighter']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              228,
              0,
              null,
              null,
              1,
              'td',
              [['class', 'py-4 px-6 border-b border-grey-light']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Control value is valid '])),
            (e()(),
            Yl(
              230,
              0,
              null,
              null,
              2,
              'td',
              [['class', 'py-4 px-6 border-b border-grey-light']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              231,
              0,
              null,
              null,
              1,
              'p',
              [
                [
                  'class',
                  'text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark',
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['ng-valid'])),
            (e()(),
            Yl(
              233,
              0,
              null,
              null,
              2,
              'td',
              [['class', 'py-4 px-6 border-b border-grey-light']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              234,
              0,
              null,
              null,
              1,
              'p',
              [
                [
                  'class',
                  'text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark',
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['ng-invalid'])),
            (e()(),
            Yl(
              236,
              0,
              null,
              null,
              1,
              'h4',
              [
                ['class', 'text-xl'],
                ['id', 'tests'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Tests'])),
            (e()(),
            Yl(
              238,
              0,
              null,
              null,
              0,
              'hr',
              [['class', 'bg-secondary h-1 w-full']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(239, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (e()(), di(-1, null, ['WIP'])),
            (e()(),
            Yl(
              241,
              0,
              null,
              null,
              1,
              'h3',
              [
                ['class', 'text-2xl'],
                ['id', 'template-forms'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Template-Driven Forms'])),
            (e()(),
            Yl(
              243,
              0,
              null,
              null,
              0,
              'hr',
              [['class', 'bg-primary h-1 w-full mb-4']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              244,
              0,
              null,
              null,
              25,
              'div',
              [['class', 'w-full bg-white py-2 px-4 my-2 rounded']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              245,
              0,
              null,
              null,
              24,
              'ul',
              [['class', 'list-disc list-outside p-2']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              246,
              0,
              null,
              null,
              1,
              'li',
              [['class', 'my-2 bullet']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, [' Suited for simple forms '])),
            (e()(),
            Yl(
              248,
              0,
              null,
              null,
              1,
              'li',
              [['class', 'mb-2 bullet']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            di(-1, null, [
              ' Arguably a simpler syntax (similar to AngularJS) ',
            ])),
            (e()(),
            Yl(
              250,
              0,
              null,
              null,
              10,
              'li',
              [['class', 'mb-2 bullet']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, [' Data model handled by '])),
            (e()(),
            Yl(
              252,
              0,
              null,
              null,
              1,
              'mark',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['#formName="ngForm"'])),
            (e()(), di(-1, null, [','])),
            (e()(),
            Yl(
              255,
              0,
              null,
              null,
              1,
              'mark',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['(ngSubmit)="onSubmit()"'])),
            (e()(), di(-1, null, [', and '])),
            (e()(),
            Yl(
              258,
              0,
              null,
              null,
              1,
              'mark',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['[(ngModel)]'])),
            (e()(),
            di(-1, null, [
              ' & 2-way data-binding - for reading and writing input-control values - ok if you know the shape of your form in advance ',
            ])),
            (e()(),
            Yl(
              261,
              0,
              null,
              null,
              1,
              'li',
              [['class', 'mb-2 bullet']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, [' Asynchronous '])),
            (e()(),
            Yl(
              263,
              0,
              null,
              null,
              4,
              'li',
              [['class', 'mb-2 bullet']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, [' Uses the '])),
            (e()(),
            Yl(
              265,
              0,
              null,
              null,
              1,
              'mark',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['FormsModule'])),
            (e()(), di(-1, null, [' (import into app.module.ts) '])),
            (e()(),
            Yl(
              268,
              0,
              null,
              null,
              1,
              'li',
              [['class', 'mb-2 bullet']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, [' Harder to test '])),
            (e()(),
            Yl(
              270,
              0,
              null,
              null,
              2,
              'a',
              [
                [
                  'class',
                  'inline-block my-1 mb-4 p-1 bg-backgroundDark text-white',
                ],
                ['href', '#top'],
                ['pageScroll', ''],
              ],
              null,
              [[null, 'click']],
              function(e, t, n) {
                var r = !0;
                return (
                  'click' === t && (r = !1 !== Kr(e, 271).handleClick(n) && r),
                  r
                );
              },
              null,
              null
            )),
            us(
              271,
              671744,
              null,
              0,
              Ug,
              [zg, [2, Cd], zo],
              {
                href: [0, 'href'],
                pageScrollDuration: [1, 'pageScrollDuration'],
                pageScroll: [2, 'pageScroll'],
              },
              null
            ),
            (e()(), di(-1, null, ['To Top'])),
            (e()(),
            Yl(
              273,
              0,
              null,
              null,
              1,
              'markdown',
              [['src', '../assets/templateForm.html']],
              null,
              null,
              null,
              pp,
              dp
            )),
            us(274, 4767744, null, 0, up, [cn, op], { src: [0, 'src'] }, null),
            (e()(),
            Yl(
              275,
              0,
              null,
              null,
              42,
              'div',
              [],
              [[8, 'hidden', 0]],
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              276,
              0,
              null,
              null,
              41,
              'form',
              [
                [
                  'class',
                  'w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4',
                ],
                ['novalidate', ''],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'ngSubmit'],
                [null, 'submit'],
                [null, 'reset'],
              ],
              function(e, t, n) {
                var r = !0,
                  s = e.component;
                return (
                  'submit' === t && (r = !1 !== Kr(e, 278).onSubmit(n) && r),
                  'reset' === t && (r = !1 !== Kr(e, 278).onReset() && r),
                  'ngSubmit' === t && (r = !1 !== s.onSubmit() && r),
                  r
                );
              },
              null,
              null
            )),
            us(277, 16384, null, 0, Eg, [], null, null),
            us(
              278,
              4210688,
              [['doggoForm', 4]],
              0,
              bg,
              [
                [8, null],
                [8, null],
              ],
              null,
              { ngSubmit: 'ngSubmit' }
            ),
            hs(2048, null, Sp, null, [bg]),
            us(280, 16384, null, 0, Np, [[4, Sp]], null, null),
            (e()(),
            Yl(
              281,
              0,
              null,
              null,
              12,
              'div',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              282,
              0,
              null,
              null,
              1,
              'label',
              [
                ['class', 'block text-gray-700 text-sm font-bold mb-2'],
                ['for', 'petName'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Pet Name'])),
            (e()(),
            Yl(
              284,
              0,
              null,
              null,
              7,
              'input',
              [
                [
                  'class',
                  'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal',
                ],
                ['id', 'petName'],
                ['name', 'petName'],
                ['required', ''],
                ['type', 'text'],
              ],
              [
                [1, 'required', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'ngModelChange'],
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
              ],
              function(e, t, n) {
                var r = !0,
                  s = e.component;
                return (
                  'input' === t &&
                    (r = !1 !== Kr(e, 285)._handleInput(n.target.value) && r),
                  'blur' === t && (r = !1 !== Kr(e, 285).onTouched() && r),
                  'compositionstart' === t &&
                    (r = !1 !== Kr(e, 285)._compositionStart() && r),
                  'compositionend' === t &&
                    (r =
                      !1 !== Kr(e, 285)._compositionEnd(n.target.value) && r),
                  'ngModelChange' === t &&
                    (r = !1 !== (s.doggo.petName = n) && r),
                  r
                );
              },
              null,
              null
            )),
            us(285, 16384, null, 0, Cp, [fn, cn, [2, wp]], null, null),
            us(
              286,
              16384,
              null,
              0,
              Pg,
              [],
              { required: [0, 'required'] },
              null
            ),
            hs(
              1024,
              null,
              Ip,
              function(e) {
                return [e];
              },
              [Pg]
            ),
            hs(
              1024,
              null,
              _p,
              function(e) {
                return [e];
              },
              [Cp]
            ),
            us(
              289,
              671744,
              [['petName', 4]],
              0,
              kg,
              [
                [2, Sp],
                [6, Ip],
                [8, null],
                [6, _p],
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              { update: 'ngModelChange' }
            ),
            hs(2048, null, Ep, null, [kg]),
            us(291, 16384, null, 0, Ap, [[4, Ep]], null, null),
            (e()(),
            Yl(
              292,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'bg-secondary text-white']],
              [[8, 'hidden', 0]],
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, [' Name is required '])),
            (e()(),
            Yl(294, 0, null, null, 8, 'div', [], null, null, null, null, null)),
            (e()(),
            Yl(
              295,
              0,
              null,
              null,
              1,
              'label',
              [
                ['class', 'block text-gray-700 text-sm font-bold mb-2'],
                ['for', 'officialName'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Official Name'])),
            (e()(),
            Yl(
              297,
              0,
              null,
              null,
              5,
              'input',
              [
                [
                  'class',
                  'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal',
                ],
                ['id', 'officialName'],
                ['name', 'officialName'],
                ['type', 'text'],
              ],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'ngModelChange'],
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend'],
              ],
              function(e, t, n) {
                var r = !0,
                  s = e.component;
                return (
                  'input' === t &&
                    (r = !1 !== Kr(e, 298)._handleInput(n.target.value) && r),
                  'blur' === t && (r = !1 !== Kr(e, 298).onTouched() && r),
                  'compositionstart' === t &&
                    (r = !1 !== Kr(e, 298)._compositionStart() && r),
                  'compositionend' === t &&
                    (r =
                      !1 !== Kr(e, 298)._compositionEnd(n.target.value) && r),
                  'ngModelChange' === t &&
                    (r = !1 !== (s.doggo.officialName = n) && r),
                  r
                );
              },
              null,
              null
            )),
            us(298, 16384, null, 0, Cp, [fn, cn, [2, wp]], null, null),
            hs(
              1024,
              null,
              _p,
              function(e) {
                return [e];
              },
              [Cp]
            ),
            us(
              300,
              671744,
              null,
              0,
              kg,
              [
                [2, Sp],
                [8, null],
                [8, null],
                [6, _p],
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              { update: 'ngModelChange' }
            ),
            hs(2048, null, Ep, null, [kg]),
            us(302, 16384, null, 0, Ap, [[4, Ep]], null, null),
            (e()(),
            Yl(
              303,
              0,
              null,
              null,
              12,
              'div',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              304,
              0,
              null,
              null,
              1,
              'label',
              [
                ['class', 'block text-gray-700 text-sm font-bold mb-2'],
                ['for', 'rating'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Rating'])),
            (e()(),
            Yl(
              306,
              0,
              null,
              null,
              9,
              'select',
              [
                [
                  'class',
                  'bg-white focus:outline-none border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal',
                ],
                ['id', 'rating'],
                ['name', 'rating'],
                ['required', ''],
              ],
              [
                [1, 'required', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null],
              ],
              [
                [null, 'ngModelChange'],
                [null, 'change'],
                [null, 'blur'],
              ],
              function(e, t, n) {
                var r = !0,
                  s = e.component;
                return (
                  'change' === t &&
                    (r = !1 !== Kr(e, 307).onChange(n.target.value) && r),
                  'blur' === t && (r = !1 !== Kr(e, 307).onTouched() && r),
                  'ngModelChange' === t &&
                    (r = !1 !== (s.doggo.rating = n) && r),
                  r
                );
              },
              null,
              null
            )),
            us(307, 16384, null, 0, Bp, [fn, cn], null, null),
            us(
              308,
              16384,
              null,
              0,
              Pg,
              [],
              { required: [0, 'required'] },
              null
            ),
            hs(
              1024,
              null,
              Ip,
              function(e) {
                return [e];
              },
              [Pg]
            ),
            hs(
              1024,
              null,
              _p,
              function(e) {
                return [e];
              },
              [Bp]
            ),
            us(
              311,
              671744,
              null,
              0,
              kg,
              [
                [2, Sp],
                [6, Ip],
                [8, null],
                [6, _p],
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              { update: 'ngModelChange' }
            ),
            hs(2048, null, Ep, null, [kg]),
            us(313, 16384, null, 0, Ap, [[4, Ep]], null, null),
            (e()(), Jl(16777216, null, null, 1, null, Jg)),
            us(
              315,
              278528,
              null,
              0,
              jo,
              [Mn, Dn, Nn],
              { ngForOf: [0, 'ngForOf'] },
              null
            ),
            (e()(),
            Yl(
              316,
              0,
              null,
              null,
              1,
              'button',
              [
                [
                  'class',
                  'bg-primary hover:bg-accent text-white font-bold my-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline',
                ],
                ['type', 'submit'],
              ],
              [[8, 'disabled', 0]],
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Submit'])),
            (e()(),
            Yl(
              318,
              0,
              null,
              null,
              20,
              'div',
              [],
              [[8, 'hidden', 0]],
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              319,
              0,
              null,
              null,
              1,
              'h2',
              [['class', 'text-xl']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['You submitted the following:'])),
            (e()(),
            Yl(321, 0, null, null, 4, 'div', [], null, null, null, null, null)),
            (e()(),
            Yl(
              322,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'block text-gray-700 text-sm font-bold mb-2']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Pet Name'])),
            (e()(),
            Yl(
              324,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'block text-dark text-md my-2 bg-white']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(325, null, ['', ''])),
            (e()(),
            Yl(326, 0, null, null, 4, 'div', [], null, null, null, null, null)),
            (e()(),
            Yl(
              327,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'block text-gray-700 text-sm font-bold mb-2']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Official Name'])),
            (e()(),
            Yl(
              329,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'block text-dark text-md my-2 bg-white']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(330, null, ['', ''])),
            (e()(),
            Yl(331, 0, null, null, 4, 'div', [], null, null, null, null, null)),
            (e()(),
            Yl(
              332,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'block text-gray-700 text-sm font-bold mb-2']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Rating'])),
            (e()(),
            Yl(
              334,
              0,
              null,
              null,
              1,
              'div',
              [['class', 'block text-dark text-md my-2 bg-white']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(335, null, ['', ''])),
            (e()(),
            Yl(336, 0, null, null, 0, 'br', [], null, null, null, null, null)),
            (e()(),
            Yl(
              337,
              0,
              null,
              null,
              1,
              'button',
              [
                [
                  'class',
                  'bg-secondary hover:bg-accent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',
                ],
              ],
              null,
              [[null, 'click']],
              function(e, t, n) {
                var r = !0;
                return (
                  'click' === t && (r = 0 != (e.component.submitted = !1) && r),
                  r
                );
              },
              null,
              null
            )),
            (e()(), di(-1, null, ['Edit'])),
            (e()(),
            Yl(
              339,
              0,
              null,
              null,
              1,
              'h3',
              [
                ['class', 'text-2xl'],
                ['id', 'template-forms'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Validation'])),
            (e()(),
            Yl(
              341,
              0,
              null,
              null,
              0,
              'hr',
              [['class', 'bg-primary h-1 w-full mb-4']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(342, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (e()(), di(-1, null, ['WIP'])),
          ],
          function(e, t) {
            var n = t.component;
            e(t, 7, 0, '#reactive-forms', 1e3, ''),
              e(t, 10, 0, '#form-group', 1e3, ''),
              e(t, 13, 0, '#form-builder', 1e3, ''),
              e(t, 16, 0, '#validation', 1e3, ''),
              e(t, 19, 0, '#tests', 1e3, ''),
              e(t, 22, 0, '#template', 1e3, ''),
              e(t, 25, 0, '#section1', 1e3, ''),
              e(t, 51, 0, '#top', 1e3, '');
            var r = Yn(
              t,
              86,
              0,
              e(t, 87, 0, Kr(t, 0), n.reactiveMarkdown, 'typescript')
            );
            e(t, 86, 0, r),
              e(t, 91, 0, n.myReactiveForm),
              e(t, 95, 0, 'name'),
              e(t, 105, 0, 'officialName'),
              e(t, 113, 0, 'petName'),
              e(t, 124, 0, 'rating'),
              e(t, 130, 0, '#top', 1e3, '');
            var s = Yn(
              t,
              145,
              0,
              e(t, 146, 0, Kr(t, 0), n.builderMarkdown, 'typescript')
            );
            e(t, 145, 0, s),
              e(t, 150, 0, n.myReactiveFormBuilder),
              e(t, 154, 0, 'name'),
              e(t, 164, 0, 'officialName'),
              e(t, 172, 0, 'petName'),
              e(t, 183, 0, 'rating'),
              e(t, 189, 0, '#top', 1e3, ''),
              e(t, 271, 0, '#top', 1e3, ''),
              e(t, 274, 0, '../assets/templateForm.html'),
              e(t, 286, 0, ''),
              e(t, 289, 0, 'petName', n.doggo.petName),
              e(t, 300, 0, 'officialName', n.doggo.officialName),
              e(t, 308, 0, ''),
              e(t, 311, 0, 'rating', n.doggo.rating),
              e(t, 315, 0, n.ratings);
          },
          function(e, t) {
            var n = t.component;
            e(
              t,
              89,
              0,
              Kr(t, 93).ngClassUntouched,
              Kr(t, 93).ngClassTouched,
              Kr(t, 93).ngClassPristine,
              Kr(t, 93).ngClassDirty,
              Kr(t, 93).ngClassValid,
              Kr(t, 93).ngClassInvalid,
              Kr(t, 93).ngClassPending
            ),
              e(
                t,
                94,
                0,
                Kr(t, 97).ngClassUntouched,
                Kr(t, 97).ngClassTouched,
                Kr(t, 97).ngClassPristine,
                Kr(t, 97).ngClassDirty,
                Kr(t, 97).ngClassValid,
                Kr(t, 97).ngClassInvalid,
                Kr(t, 97).ngClassPending
              ),
              e(
                t,
                102,
                0,
                Kr(t, 107).ngClassUntouched,
                Kr(t, 107).ngClassTouched,
                Kr(t, 107).ngClassPristine,
                Kr(t, 107).ngClassDirty,
                Kr(t, 107).ngClassValid,
                Kr(t, 107).ngClassInvalid,
                Kr(t, 107).ngClassPending
              ),
              e(
                t,
                110,
                0,
                Kr(t, 115).ngClassUntouched,
                Kr(t, 115).ngClassTouched,
                Kr(t, 115).ngClassPristine,
                Kr(t, 115).ngClassDirty,
                Kr(t, 115).ngClassValid,
                Kr(t, 115).ngClassInvalid,
                Kr(t, 115).ngClassPending
              ),
              e(
                t,
                120,
                0,
                Kr(t, 126).ngClassUntouched,
                Kr(t, 126).ngClassTouched,
                Kr(t, 126).ngClassPristine,
                Kr(t, 126).ngClassDirty,
                Kr(t, 126).ngClassValid,
                Kr(t, 126).ngClassInvalid,
                Kr(t, 126).ngClassPending
              ),
              e(t, 127, 0, !n.myReactiveForm.valid),
              e(
                t,
                148,
                0,
                Kr(t, 152).ngClassUntouched,
                Kr(t, 152).ngClassTouched,
                Kr(t, 152).ngClassPristine,
                Kr(t, 152).ngClassDirty,
                Kr(t, 152).ngClassValid,
                Kr(t, 152).ngClassInvalid,
                Kr(t, 152).ngClassPending
              ),
              e(
                t,
                153,
                0,
                Kr(t, 156).ngClassUntouched,
                Kr(t, 156).ngClassTouched,
                Kr(t, 156).ngClassPristine,
                Kr(t, 156).ngClassDirty,
                Kr(t, 156).ngClassValid,
                Kr(t, 156).ngClassInvalid,
                Kr(t, 156).ngClassPending
              ),
              e(
                t,
                161,
                0,
                Kr(t, 166).ngClassUntouched,
                Kr(t, 166).ngClassTouched,
                Kr(t, 166).ngClassPristine,
                Kr(t, 166).ngClassDirty,
                Kr(t, 166).ngClassValid,
                Kr(t, 166).ngClassInvalid,
                Kr(t, 166).ngClassPending
              ),
              e(
                t,
                169,
                0,
                Kr(t, 174).ngClassUntouched,
                Kr(t, 174).ngClassTouched,
                Kr(t, 174).ngClassPristine,
                Kr(t, 174).ngClassDirty,
                Kr(t, 174).ngClassValid,
                Kr(t, 174).ngClassInvalid,
                Kr(t, 174).ngClassPending
              ),
              e(
                t,
                179,
                0,
                Kr(t, 185).ngClassUntouched,
                Kr(t, 185).ngClassTouched,
                Kr(t, 185).ngClassPristine,
                Kr(t, 185).ngClassDirty,
                Kr(t, 185).ngClassValid,
                Kr(t, 185).ngClassInvalid,
                Kr(t, 185).ngClassPending
              ),
              e(t, 186, 0, !n.myReactiveForm.valid),
              e(t, 275, 0, n.submitted),
              e(
                t,
                276,
                0,
                Kr(t, 280).ngClassUntouched,
                Kr(t, 280).ngClassTouched,
                Kr(t, 280).ngClassPristine,
                Kr(t, 280).ngClassDirty,
                Kr(t, 280).ngClassValid,
                Kr(t, 280).ngClassInvalid,
                Kr(t, 280).ngClassPending
              ),
              e(
                t,
                284,
                0,
                Kr(t, 286).required ? '' : null,
                Kr(t, 291).ngClassUntouched,
                Kr(t, 291).ngClassTouched,
                Kr(t, 291).ngClassPristine,
                Kr(t, 291).ngClassDirty,
                Kr(t, 291).ngClassValid,
                Kr(t, 291).ngClassInvalid,
                Kr(t, 291).ngClassPending
              ),
              e(t, 292, 0, Kr(t, 289).valid || Kr(t, 289).pristine),
              e(
                t,
                297,
                0,
                Kr(t, 302).ngClassUntouched,
                Kr(t, 302).ngClassTouched,
                Kr(t, 302).ngClassPristine,
                Kr(t, 302).ngClassDirty,
                Kr(t, 302).ngClassValid,
                Kr(t, 302).ngClassInvalid,
                Kr(t, 302).ngClassPending
              ),
              e(
                t,
                306,
                0,
                Kr(t, 308).required ? '' : null,
                Kr(t, 313).ngClassUntouched,
                Kr(t, 313).ngClassTouched,
                Kr(t, 313).ngClassPristine,
                Kr(t, 313).ngClassDirty,
                Kr(t, 313).ngClassValid,
                Kr(t, 313).ngClassInvalid,
                Kr(t, 313).ngClassPending
              ),
              e(t, 316, 0, !Kr(t, 278).form.valid),
              e(t, 318, 0, !n.submitted),
              e(t, 325, 0, n.doggo.petName),
              e(t, 330, 0, n.doggo.officialName),
              e(t, 335, 0, n.doggo.rating);
          }
        );
      }
      function Xg(e) {
        return fi(
          0,
          [
            (e()(),
            Yl(0, 0, null, null, 1, 'app-forms', [], null, null, null, Yg, Kg)),
            us(1, 114688, null, 0, Qg, [Vg], null, null),
          ],
          function(e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      var ef = Fr('app-forms', Qg, Xg, {}, {}, []);
      class tf {
        constructor() {
          (this.routerLink =
            '<a routerLink="/" [routerLinkActiveOptions]="{ exact: true }">Home</a>'),
            (this.pageScroll =
              "ngx i ngx-page-scroll --save\n  \n// in app.module.ts\nimport { NgxPageScrollModule } from 'ngx-page-scroll';\n\n@NgModule({\n    imports: [\n        /* Other imports here */\n        NgxPageScrollModule\n        ]\n})\nexport class AppModule {\n}"),
            (this.cssSnippet =
              '.active {\n    background-color: theme(backgroundColor.background-dark);\n    color: theme(colors.white);\n  }\n');
        }
        ngOnInit() {}
      }
      var nf = tr({ encapsulation: 0, styles: [['']], data: {} });
      function rf(e) {
        return fi(
          0,
          [
            cs(0, np, []),
            (e()(),
            Yl(
              1,
              0,
              null,
              null,
              1,
              'h1',
              [
                ['class', 'text-3xl'],
                ['id', 'top'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Gotchas & Resources'])),
            (e()(),
            Yl(
              3,
              0,
              null,
              null,
              0,
              'hr',
              [['class', 'bg-accent h-1 w-full mb-4']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              4,
              0,
              null,
              null,
              8,
              'div',
              [['class', 'inline-block my-2 w-full']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              5,
              0,
              null,
              null,
              1,
              'h2',
              [['class', 'text-xl']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Active Link'])),
            (e()(),
            Yl(
              7,
              0,
              null,
              null,
              0,
              'hr',
              [['class', 'bg-secondary h-1 w-full mb-4']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(8, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (e()(),
            di(-1, null, [
              " If you have a root - '/' - route, it will always be active unless you add the following to the element with the routerLink ",
            ])),
            (e()(),
            Yl(10, 0, null, null, 2, 'markdown', [], null, null, null, pp, dp)),
            us(11, 4767744, null, 0, up, [cn, op], { data: [0, 'data'] }, null),
            ui(12, 2),
            (e()(),
            Yl(
              13,
              0,
              null,
              null,
              11,
              'div',
              [['class', 'inline-block my-4 w-full']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              14,
              0,
              null,
              null,
              1,
              'h2',
              [['class', 'text-xl']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Tailwind CSS'])),
            (e()(),
            Yl(
              16,
              0,
              null,
              null,
              0,
              'hr',
              [['class', 'bg-secondary h-1 w-full mb-4']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, [' https://tailwindcss.com/ '])),
            (e()(),
            Yl(18, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (e()(),
            di(-1, null, [
              'https://dev.to/beavearony/building-tailwind-css-in-an-angular-cli-project-e04',
            ])),
            (e()(),
            Yl(20, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (e()(),
            di(-1, null, [
              ' If you extend the palette in tailwind.config.js, access the colours using dot notation in your scss file ',
            ])),
            (e()(),
            Yl(22, 0, null, null, 2, 'markdown', [], null, null, null, pp, dp)),
            us(23, 4767744, null, 0, up, [cn, op], { data: [0, 'data'] }, null),
            ui(24, 2),
            (e()(),
            Yl(
              25,
              0,
              null,
              null,
              12,
              'div',
              [['class', 'inline-block my-2 w-full']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              26,
              0,
              null,
              null,
              1,
              'h2',
              [['class', 'text-xl']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['PageScroll Directive'])),
            (e()(),
            Yl(
              28,
              0,
              null,
              null,
              0,
              'hr',
              [['class', 'bg-secondary h-1 w-full mb-4']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(29, 0, null, null, 4, 'p', [], null, null, null, null, null)),
            (e()(),
            di(-1, null, [
              "'Animated scrolling functionality for angular written in TypeScript' - https://github.com/Nolanus/ngx-page-scroll ",
            ])),
            (e()(),
            Yl(31, 0, null, null, 2, 'markdown', [], null, null, null, pp, dp)),
            us(32, 4767744, null, 0, up, [cn, op], { data: [0, 'data'] }, null),
            ui(33, 2),
            (e()(),
            Yl(34, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (e()(),
            di(-1, null, [
              ' Disable hover (& other pointer events) on scroll to improve performance ',
            ])),
            (e()(),
            Yl(
              36,
              0,
              null,
              null,
              1,
              'a',
              [
                [
                  'href',
                  'https://www.thecssninja.com/javascript/pointer-events-60fps',
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['The CSS Ninja Blog Post'])),
            (e()(),
            Yl(
              38,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'inline-block my-2 w-full']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              39,
              0,
              null,
              null,
              1,
              'h2',
              [['class', 'text-xl']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Prisma.js'])),
            (e()(),
            Yl(
              41,
              0,
              null,
              null,
              0,
              'hr',
              [['class', 'bg-secondary h-1 w-full mb-4']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            di(-1, null, [
              ' Access the markdown via a template-literal class property to avoid having to escape characters ',
            ])),
            (e()(),
            Yl(
              43,
              0,
              null,
              null,
              4,
              'div',
              [['class', 'inline-block my-2 w-full']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              44,
              0,
              null,
              null,
              1,
              'h2',
              [['class', 'text-xl']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['Ngx Markdown'])),
            (e()(),
            Yl(
              46,
              0,
              null,
              null,
              0,
              'hr',
              [['class', 'bg-secondary h-1 w-full mb-4']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            di(-1, null, [' https://github.com/jfcere/ngx-markdown\n'])),
          ],
          function(e, t) {
            var n = t.component,
              r = Yn(
                t,
                11,
                0,
                e(t, 12, 0, Kr(t, 0), n.routerLink, 'typescript')
              );
            e(t, 11, 0, r);
            var s = Yn(t, 23, 0, e(t, 24, 0, Kr(t, 0), n.cssSnippet, 'css'));
            e(t, 23, 0, s);
            var l = Yn(
              t,
              32,
              0,
              e(t, 33, 0, Kr(t, 0), n.pageScroll, 'javascript')
            );
            e(t, 32, 0, l);
          },
          null
        );
      }
      function sf(e) {
        return fi(
          0,
          [
            (e()(),
            Yl(
              0,
              0,
              null,
              null,
              1,
              'app-resources',
              [],
              null,
              null,
              null,
              rf,
              nf
            )),
            us(1, 114688, null, 0, tf, [], null, null),
          ],
          function(e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      var lf = Fr('app-resources', tf, sf, {}, {}, []);
      class of {
        constructor() {}
        ngOnInit() {}
      }
      var af = tr({ encapsulation: 0, styles: [['']], data: {} });
      function uf(e) {
        return fi(
          0,
          [
            (e()(),
            Yl(
              0,
              0,
              null,
              null,
              1,
              'h1',
              [
                ['class', 'text-3xl'],
                ['id', 'top'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), di(-1, null, ['About'])),
            (e()(),
            Yl(
              2,
              0,
              null,
              null,
              0,
              'hr',
              [['class', 'bg-accent h-1 w-full mb-4']],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          null,
          null
        );
      }
      function cf(e) {
        return fi(
          0,
          [
            (e()(),
            Yl(0, 0, null, null, 1, 'app-about', [], null, null, null, uf, af)),
            us(1, 114688, null, 0, of, [], null, null),
          ],
          function(e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      var hf = Fr('app-about', of, cf, {}, {}, []);
      class df {
        constructor() {}
        ngOnInit() {}
      }
      var pf = tr({ encapsulation: 0, styles: [['']], data: {} });
      function gf(e) {
        return fi(
          0,
          [
            (e()(),
            Yl(0, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (e()(), di(-1, null, ['page-not-found works!'])),
          ],
          null,
          null
        );
      }
      function ff(e) {
        return fi(
          0,
          [
            (e()(),
            Yl(
              0,
              0,
              null,
              null,
              1,
              'app-page-not-found',
              [],
              null,
              null,
              null,
              gf,
              pf
            )),
            us(1, 114688, null, 0, df, [], null, null),
          ],
          function(e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      var mf = Fr('app-page-not-found', df, ff, {}, {}, []);
      class yf {
        constructor() {
          this.header = 'LearningAngular()';
        }
        ngOnInit() {}
      }
      var vf = tr({ encapsulation: 0, styles: [['']], data: {} });
      function bf(e) {
        return fi(
          0,
          [
            cs(0, np, []),
            (e()(),
            Yl(
              1,
              0,
              null,
              null,
              39,
              'header',
              [
                [
                  'class',
                  'flex items-center justify-between px-4 py-3 bg-background',
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(2, 0, null, null, 3, 'div', [], null, null, null, null, null)),
            (e()(),
            Yl(3, 0, null, null, 2, 'markdown', [], null, null, null, pp, dp)),
            us(4, 4767744, null, 0, up, [cn, op], { data: [0, 'data'] }, null),
            ui(5, 2),
            (e()(),
            Yl(
              6,
              0,
              null,
              null,
              34,
              'div',
              [['class', 'flex']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(7, 0, null, null, 30, 'nav', [], null, null, null, null, null)),
            (e()(),
            Yl(
              8,
              0,
              null,
              null,
              29,
              'ul',
              [['class', 'flex']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(9, 0, null, null, 7, 'li', [], null, null, null, null, null)),
            (e()(),
            Yl(
              10,
              0,
              null,
              null,
              6,
              'a',
              [
                [
                  'class',
                  'py-2 px-4 mr-2 hover:bg-backgroundDark hover:text-white',
                ],
                ['routerLink', '/'],
                ['routerLinkActive', 'active'],
              ],
              [
                [1, 'target', 0],
                [8, 'href', 4],
              ],
              [[null, 'click']],
              function(e, t, n) {
                var r = !0;
                return (
                  'click' === t &&
                    (r =
                      !1 !==
                        Kr(e, 11).onClick(
                          n.button,
                          n.ctrlKey,
                          n.metaKey,
                          n.shiftKey
                        ) && r),
                  r
                );
              },
              null,
              null
            )),
            us(
              11,
              671744,
              [[2, 4]],
              0,
              Sd,
              [Cd, hh, To],
              { routerLink: [0, 'routerLink'] },
              null
            ),
            us(
              12,
              1720320,
              null,
              2,
              Ed,
              [Cd, cn, fn, [2, xd], [2, Sd]],
              {
                routerLinkActiveOptions: [0, 'routerLinkActiveOptions'],
                routerLinkActive: [1, 'routerLinkActive'],
              },
              null
            ),
            ri(603979776, 1, { links: 1 }),
            ri(603979776, 2, { linksWithHrefs: 1 }),
            ci(15, { exact: 0 }),
            (e()(), di(-1, null, ['Home'])),
            (e()(),
            Yl(17, 0, null, null, 6, 'li', [], null, null, null, null, null)),
            (e()(),
            Yl(
              18,
              0,
              null,
              null,
              5,
              'a',
              [
                [
                  'class',
                  'py-2 px-4 mr-2 hover:bg-backgroundDark hover:text-white',
                ],
                ['routerLink', '/forms'],
                ['routerLinkActive', 'active'],
              ],
              [
                [1, 'target', 0],
                [8, 'href', 4],
              ],
              [[null, 'click']],
              function(e, t, n) {
                var r = !0;
                return (
                  'click' === t &&
                    (r =
                      !1 !==
                        Kr(e, 19).onClick(
                          n.button,
                          n.ctrlKey,
                          n.metaKey,
                          n.shiftKey
                        ) && r),
                  r
                );
              },
              null,
              null
            )),
            us(
              19,
              671744,
              [[4, 4]],
              0,
              Sd,
              [Cd, hh, To],
              { routerLink: [0, 'routerLink'] },
              null
            ),
            us(
              20,
              1720320,
              null,
              2,
              Ed,
              [Cd, cn, fn, [2, xd], [2, Sd]],
              { routerLinkActive: [0, 'routerLinkActive'] },
              null
            ),
            ri(603979776, 3, { links: 1 }),
            ri(603979776, 4, { linksWithHrefs: 1 }),
            (e()(), di(-1, null, ['Forms'])),
            (e()(),
            Yl(24, 0, null, null, 6, 'li', [], null, null, null, null, null)),
            (e()(),
            Yl(
              25,
              0,
              null,
              null,
              5,
              'a',
              [
                [
                  'class',
                  'py-2 px-4 mr-2 hover:bg-backgroundDark hover:text-white',
                ],
                ['routerLink', '/resources'],
                ['routerLinkActive', 'active'],
              ],
              [
                [1, 'target', 0],
                [8, 'href', 4],
              ],
              [[null, 'click']],
              function(e, t, n) {
                var r = !0;
                return (
                  'click' === t &&
                    (r =
                      !1 !==
                        Kr(e, 26).onClick(
                          n.button,
                          n.ctrlKey,
                          n.metaKey,
                          n.shiftKey
                        ) && r),
                  r
                );
              },
              null,
              null
            )),
            us(
              26,
              671744,
              [[6, 4]],
              0,
              Sd,
              [Cd, hh, To],
              { routerLink: [0, 'routerLink'] },
              null
            ),
            us(
              27,
              1720320,
              null,
              2,
              Ed,
              [Cd, cn, fn, [2, xd], [2, Sd]],
              { routerLinkActive: [0, 'routerLinkActive'] },
              null
            ),
            ri(603979776, 5, { links: 1 }),
            ri(603979776, 6, { linksWithHrefs: 1 }),
            (e()(), di(-1, null, ['Resources & Gotchas'])),
            (e()(),
            Yl(31, 0, null, null, 6, 'li', [], null, null, null, null, null)),
            (e()(),
            Yl(
              32,
              0,
              null,
              null,
              5,
              'a',
              [
                ['class', 'py-2 px-4 hover:bg-backgroundDark hover:text-white'],
                ['routerLink', '/about'],
                ['routerLinkActive', 'active'],
              ],
              [
                [1, 'target', 0],
                [8, 'href', 4],
              ],
              [[null, 'click']],
              function(e, t, n) {
                var r = !0;
                return (
                  'click' === t &&
                    (r =
                      !1 !==
                        Kr(e, 33).onClick(
                          n.button,
                          n.ctrlKey,
                          n.metaKey,
                          n.shiftKey
                        ) && r),
                  r
                );
              },
              null,
              null
            )),
            us(
              33,
              671744,
              [[8, 4]],
              0,
              Sd,
              [Cd, hh, To],
              { routerLink: [0, 'routerLink'] },
              null
            ),
            us(
              34,
              1720320,
              null,
              2,
              Ed,
              [Cd, cn, fn, [2, xd], [2, Sd]],
              { routerLinkActive: [0, 'routerLinkActive'] },
              null
            ),
            ri(603979776, 7, { links: 1 }),
            ri(603979776, 8, { linksWithHrefs: 1 }),
            (e()(), di(-1, null, ['About'])),
            (e()(),
            Yl(
              38,
              0,
              null,
              null,
              2,
              'button',
              [
                [
                  'class',
                  'block text-gray-500 hover:text-white focus:text-white focus:outline-none',
                ],
                ['type', 'button'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              39,
              0,
              null,
              null,
              1,
              ':svg:svg',
              [
                ['class', 'h-6 w-6 fill-current'],
                ['viewBox', '0 0 24 24'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              40,
              0,
              null,
              null,
              0,
              ':svg:path',
              [
                [
                  'd',
                  'M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z',
                ],
                ['fill-rule', 'evenodd'],
              ],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          function(e, t) {
            var n = t.component,
              r = Yn(t, 4, 0, e(t, 5, 0, Kr(t, 0), n.header, 'javascript'));
            e(t, 4, 0, r), e(t, 11, 0, '/');
            var s = e(t, 15, 0, !0);
            e(t, 12, 0, s, 'active'),
              e(t, 19, 0, '/forms'),
              e(t, 20, 0, 'active'),
              e(t, 26, 0, '/resources'),
              e(t, 27, 0, 'active'),
              e(t, 33, 0, '/about'),
              e(t, 34, 0, 'active');
          },
          function(e, t) {
            e(t, 10, 0, Kr(t, 11).target, Kr(t, 11).href),
              e(t, 18, 0, Kr(t, 19).target, Kr(t, 19).href),
              e(t, 25, 0, Kr(t, 26).target, Kr(t, 26).href),
              e(t, 32, 0, Kr(t, 33).target, Kr(t, 33).href);
          }
        );
      }
      class _f {
        constructor() {}
        ngOnInit() {}
      }
      var wf = tr({ encapsulation: 0, styles: [['']], data: {} });
      function Cf(e) {
        return fi(
          0,
          [
            (e()(),
            Yl(
              0,
              0,
              null,
              null,
              3,
              'footer',
              [
                [
                  'class',
                  'flex items-center justify-between px-4 py-3 bg-background',
                ],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(1, 0, null, null, 1, 'div', [], null, null, null, null, null)),
            (e()(), di(-1, null, [' \xa9 2020 ClareBee '])),
            (e()(),
            Yl(3, 0, null, null, 0, 'div', [], null, null, null, null, null)),
          ],
          null,
          null
        );
      }
      var xf = tr({ encapsulation: 0, styles: [['']], data: {} });
      function Sf(e) {
        return fi(
          0,
          [
            (e()(),
            Yl(
              0,
              0,
              null,
              null,
              7,
              'div',
              [['class', 'flex flex-col min-h-screen bg-background text-dark']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              1,
              0,
              null,
              null,
              1,
              'app-header',
              [],
              null,
              null,
              null,
              bf,
              vf
            )),
            us(2, 114688, null, 0, yf, [], null, null),
            (e()(),
            Yl(
              3,
              0,
              null,
              null,
              2,
              'main',
              [['class', 'flex-grow w-full lg:w-1/2 mx-auto px-4 font-sans']],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Yl(
              4,
              16777216,
              null,
              null,
              1,
              'router-outlet',
              [],
              null,
              null,
              null,
              null,
              null
            )),
            us(5, 212992, null, 0, Nd, [Ad, Mn, ln, [8, null], Ot], null, null),
            (e()(),
            Yl(
              6,
              0,
              null,
              null,
              1,
              'app-footer',
              [],
              null,
              null,
              null,
              Cf,
              wf
            )),
            us(7, 114688, null, 0, _f, [], null, null),
          ],
          function(e, t) {
            e(t, 2, 0), e(t, 5, 0), e(t, 7, 0);
          },
          null
        );
      }
      function kf(e) {
        return fi(
          0,
          [
            (e()(),
            Yl(0, 0, null, null, 1, 'app-root', [], null, null, null, Sf, xf)),
            us(1, 49152, null, 0, So, [], null, null),
          ],
          null,
          null
        );
      }
      var Ef = Fr('app-root', So, kf, {}, {}, []);
      class Tf {}
      class Af {}
      class Nf {
        constructor(e) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            e
              ? (this.lazyInit =
                  'string' == typeof e
                    ? () => {
                        (this.headers = new Map()),
                          e.split('\n').forEach(e => {
                            const t = e.indexOf(':');
                            if (t > 0) {
                              const n = e.slice(0, t),
                                r = n.toLowerCase(),
                                s = e.slice(t + 1).trim();
                              this.maybeSetNormalizedName(n, r),
                                this.headers.has(r)
                                  ? this.headers.get(r).push(s)
                                  : this.headers.set(r, [s]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(e).forEach(t => {
                            let n = e[t];
                            const r = t.toLowerCase();
                            'string' == typeof n && (n = [n]),
                              n.length > 0 &&
                                (this.headers.set(r, n),
                                this.maybeSetNormalizedName(t, r));
                          });
                      })
              : (this.headers = new Map());
        }
        has(e) {
          return this.init(), this.headers.has(e.toLowerCase());
        }
        get(e) {
          this.init();
          const t = this.headers.get(e.toLowerCase());
          return t && t.length > 0 ? t[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(e) {
          return this.init(), this.headers.get(e.toLowerCase()) || null;
        }
        append(e, t) {
          return this.clone({ name: e, value: t, op: 'a' });
        }
        set(e, t) {
          return this.clone({ name: e, value: t, op: 's' });
        }
        delete(e, t) {
          return this.clone({ name: e, value: t, op: 'd' });
        }
        maybeSetNormalizedName(e, t) {
          this.normalizedNames.has(t) || this.normalizedNames.set(t, e);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof Nf
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach(e => this.applyUpdate(e)),
              (this.lazyUpdate = null)));
        }
        copyFrom(e) {
          e.init(),
            Array.from(e.headers.keys()).forEach(t => {
              this.headers.set(t, e.headers.get(t)),
                this.normalizedNames.set(t, e.normalizedNames.get(t));
            });
        }
        clone(e) {
          const t = new Nf();
          return (
            (t.lazyInit =
              this.lazyInit && this.lazyInit instanceof Nf
                ? this.lazyInit
                : this),
            (t.lazyUpdate = (this.lazyUpdate || []).concat([e])),
            t
          );
        }
        applyUpdate(e) {
          const t = e.name.toLowerCase();
          switch (e.op) {
            case 'a':
            case 's':
              let n = e.value;
              if (('string' == typeof n && (n = [n]), 0 === n.length)) return;
              this.maybeSetNormalizedName(e.name, t);
              const r = ('a' === e.op ? this.headers.get(t) : void 0) || [];
              r.push(...n), this.headers.set(t, r);
              break;
            case 'd':
              const s = e.value;
              if (s) {
                let e = this.headers.get(t);
                if (!e) return;
                0 === (e = e.filter(e => -1 === s.indexOf(e))).length
                  ? (this.headers.delete(t), this.normalizedNames.delete(t))
                  : this.headers.set(t, e);
              } else this.headers.delete(t), this.normalizedNames.delete(t);
          }
        }
        forEach(e) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach(t =>
              e(this.normalizedNames.get(t), this.headers.get(t))
            );
        }
      }
      class Of {
        encodeKey(e) {
          return If(e);
        }
        encodeValue(e) {
          return If(e);
        }
        decodeKey(e) {
          return decodeURIComponent(e);
        }
        decodeValue(e) {
          return decodeURIComponent(e);
        }
      }
      function If(e) {
        return encodeURIComponent(e)
          .replace(/%40/gi, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/gi, '$')
          .replace(/%2C/gi, ',')
          .replace(/%3B/gi, ';')
          .replace(/%2B/gi, '+')
          .replace(/%3D/gi, '=')
          .replace(/%3F/gi, '?')
          .replace(/%2F/gi, '/');
      }
      class Rf {
        constructor(e = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = e.encoder || new Of()),
            e.fromString)
          ) {
            if (e.fromObject)
              throw new Error('Cannot specify both fromString and fromObject.');
            this.map = (function(e, t) {
              const n = new Map();
              return (
                e.length > 0 &&
                  e.split('&').forEach(e => {
                    const r = e.indexOf('='),
                      [s, l] =
                        -1 == r
                          ? [t.decodeKey(e), '']
                          : [
                              t.decodeKey(e.slice(0, r)),
                              t.decodeValue(e.slice(r + 1)),
                            ],
                      i = n.get(s) || [];
                    i.push(l), n.set(s, i);
                  }),
                n
              );
            })(e.fromString, this.encoder);
          } else
            e.fromObject
              ? ((this.map = new Map()),
                Object.keys(e.fromObject).forEach(t => {
                  const n = e.fromObject[t];
                  this.map.set(t, Array.isArray(n) ? n : [n]);
                }))
              : (this.map = null);
        }
        has(e) {
          return this.init(), this.map.has(e);
        }
        get(e) {
          this.init();
          const t = this.map.get(e);
          return t ? t[0] : null;
        }
        getAll(e) {
          return this.init(), this.map.get(e) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(e, t) {
          return this.clone({ param: e, value: t, op: 'a' });
        }
        set(e, t) {
          return this.clone({ param: e, value: t, op: 's' });
        }
        delete(e, t) {
          return this.clone({ param: e, value: t, op: 'd' });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map(e => {
                const t = this.encoder.encodeKey(e);
                return this.map
                  .get(e)
                  .map(e => t + '=' + this.encoder.encodeValue(e))
                  .join('&');
              })
              .join('&')
          );
        }
        clone(e) {
          const t = new Rf({ encoder: this.encoder });
          return (
            (t.cloneFrom = this.cloneFrom || this),
            (t.updates = (this.updates || []).concat([e])),
            t
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach(e => this.map.set(e, this.cloneFrom.map.get(e))),
              this.updates.forEach(e => {
                switch (e.op) {
                  case 'a':
                  case 's':
                    const t =
                      ('a' === e.op ? this.map.get(e.param) : void 0) || [];
                    t.push(e.value), this.map.set(e.param, t);
                    break;
                  case 'd':
                    if (void 0 === e.value) {
                      this.map.delete(e.param);
                      break;
                    }
                    {
                      let t = this.map.get(e.param) || [];
                      const n = t.indexOf(e.value);
                      -1 !== n && t.splice(n, 1),
                        t.length > 0
                          ? this.map.set(e.param, t)
                          : this.map.delete(e.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      function Pf(e) {
        return 'undefined' != typeof ArrayBuffer && e instanceof ArrayBuffer;
      }
      function Df(e) {
        return 'undefined' != typeof Blob && e instanceof Blob;
      }
      function Vf(e) {
        return 'undefined' != typeof FormData && e instanceof FormData;
      }
      class Mf {
        constructor(e, t, n, r) {
          let s;
          if (
            ((this.url = t),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = 'json'),
            (this.method = e.toUpperCase()),
            (function(e) {
              switch (e) {
                case 'DELETE':
                case 'GET':
                case 'HEAD':
                case 'OPTIONS':
                case 'JSONP':
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || r
              ? ((this.body = void 0 !== n ? n : null), (s = r))
              : (s = n),
            s &&
              ((this.reportProgress = !!s.reportProgress),
              (this.withCredentials = !!s.withCredentials),
              s.responseType && (this.responseType = s.responseType),
              s.headers && (this.headers = s.headers),
              s.params && (this.params = s.params)),
            this.headers || (this.headers = new Nf()),
            this.params)
          ) {
            const e = this.params.toString();
            if (0 === e.length) this.urlWithParams = t;
            else {
              const n = t.indexOf('?');
              this.urlWithParams =
                t + (-1 === n ? '?' : n < t.length - 1 ? '&' : '') + e;
            }
          } else (this.params = new Rf()), (this.urlWithParams = t);
        }
        serializeBody() {
          return null === this.body
            ? null
            : Pf(this.body) ||
              Df(this.body) ||
              Vf(this.body) ||
              'string' == typeof this.body
            ? this.body
            : this.body instanceof Rf
            ? this.body.toString()
            : 'object' == typeof this.body ||
              'boolean' == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body
            ? null
            : Vf(this.body)
            ? null
            : Df(this.body)
            ? this.body.type || null
            : Pf(this.body)
            ? null
            : 'string' == typeof this.body
            ? 'text/plain'
            : this.body instanceof Rf
            ? 'application/x-www-form-urlencoded;charset=UTF-8'
            : 'object' == typeof this.body ||
              'number' == typeof this.body ||
              Array.isArray(this.body)
            ? 'application/json'
            : null;
        }
        clone(e = {}) {
          const t = e.method || this.method,
            n = e.url || this.url,
            r = e.responseType || this.responseType,
            s = void 0 !== e.body ? e.body : this.body,
            l =
              void 0 !== e.withCredentials
                ? e.withCredentials
                : this.withCredentials,
            i =
              void 0 !== e.reportProgress
                ? e.reportProgress
                : this.reportProgress;
          let o = e.headers || this.headers,
            a = e.params || this.params;
          return (
            void 0 !== e.setHeaders &&
              (o = Object.keys(e.setHeaders).reduce(
                (t, n) => t.set(n, e.setHeaders[n]),
                o
              )),
            e.setParams &&
              (a = Object.keys(e.setParams).reduce(
                (t, n) => t.set(n, e.setParams[n]),
                a
              )),
            new Mf(t, n, s, {
              params: a,
              headers: o,
              reportProgress: i,
              responseType: r,
              withCredentials: l,
            })
          );
        }
      }
      const Lf = (function() {
        var e = {
          Sent: 0,
          UploadProgress: 1,
          ResponseHeader: 2,
          DownloadProgress: 3,
          Response: 4,
          User: 5,
        };
        return (
          (e[e.Sent] = 'Sent'),
          (e[e.UploadProgress] = 'UploadProgress'),
          (e[e.ResponseHeader] = 'ResponseHeader'),
          (e[e.DownloadProgress] = 'DownloadProgress'),
          (e[e.Response] = 'Response'),
          (e[e.User] = 'User'),
          e
        );
      })();
      class Uf {
        constructor(e, t = 200, n = 'OK') {
          (this.headers = e.headers || new Nf()),
            (this.status = void 0 !== e.status ? e.status : t),
            (this.statusText = e.statusText || n),
            (this.url = e.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class Ff extends Uf {
        constructor(e = {}) {
          super(e), (this.type = Lf.ResponseHeader);
        }
        clone(e = {}) {
          return new Ff({
            headers: e.headers || this.headers,
            status: void 0 !== e.status ? e.status : this.status,
            statusText: e.statusText || this.statusText,
            url: e.url || this.url || void 0,
          });
        }
      }
      class jf extends Uf {
        constructor(e = {}) {
          super(e),
            (this.type = Lf.Response),
            (this.body = void 0 !== e.body ? e.body : null);
        }
        clone(e = {}) {
          return new jf({
            body: void 0 !== e.body ? e.body : this.body,
            headers: e.headers || this.headers,
            status: void 0 !== e.status ? e.status : this.status,
            statusText: e.statusText || this.statusText,
            url: e.url || this.url || void 0,
          });
        }
      }
      class $f extends Uf {
        constructor(e) {
          super(e, 0, 'Unknown Error'),
            (this.name = 'HttpErrorResponse'),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? `Http failure during parsing for ${e.url || '(unknown url)'}`
                : `Http failure response for ${e.url || '(unknown url)'}: ${
                    e.status
                  } ${e.statusText}`),
            (this.error = e.error || null);
        }
      }
      function Hf(e, t) {
        return {
          body: t,
          headers: e.headers,
          observe: e.observe,
          params: e.params,
          reportProgress: e.reportProgress,
          responseType: e.responseType,
          withCredentials: e.withCredentials,
        };
      }
      class zf {
        constructor(e) {
          this.handler = e;
        }
        request(e, t, n = {}) {
          let r;
          if (e instanceof Mf) r = e;
          else {
            let s = void 0;
            s = n.headers instanceof Nf ? n.headers : new Nf(n.headers);
            let l = void 0;
            n.params &&
              (l =
                n.params instanceof Rf
                  ? n.params
                  : new Rf({ fromObject: n.params })),
              (r = new Mf(e, t, void 0 !== n.body ? n.body : null, {
                headers: s,
                params: l,
                reportProgress: n.reportProgress,
                responseType: n.responseType || 'json',
                withCredentials: n.withCredentials,
              }));
          }
          const s = Yo(r).pipe(Fa(e => this.handler.handle(e)));
          if (e instanceof Mf || 'events' === n.observe) return s;
          const l = s.pipe(oa(e => e instanceof jf));
          switch (n.observe || 'body') {
            case 'body':
              switch (r.responseType) {
                case 'arraybuffer':
                  return l.pipe(
                    H(e => {
                      if (null !== e.body && !(e.body instanceof ArrayBuffer))
                        throw new Error('Response is not an ArrayBuffer.');
                      return e.body;
                    })
                  );
                case 'blob':
                  return l.pipe(
                    H(e => {
                      if (null !== e.body && !(e.body instanceof Blob))
                        throw new Error('Response is not a Blob.');
                      return e.body;
                    })
                  );
                case 'text':
                  return l.pipe(
                    H(e => {
                      if (null !== e.body && 'string' != typeof e.body)
                        throw new Error('Response is not a string.');
                      return e.body;
                    })
                  );
                case 'json':
                default:
                  return l.pipe(H(e => e.body));
              }
            case 'response':
              return l;
            default:
              throw new Error(
                `Unreachable: unhandled observe type ${n.observe}}`
              );
          }
        }
        delete(e, t = {}) {
          return this.request('DELETE', e, t);
        }
        get(e, t = {}) {
          return this.request('GET', e, t);
        }
        head(e, t = {}) {
          return this.request('HEAD', e, t);
        }
        jsonp(e, t) {
          return this.request('JSONP', e, {
            params: new Rf().append(t, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
          });
        }
        options(e, t = {}) {
          return this.request('OPTIONS', e, t);
        }
        patch(e, t, n = {}) {
          return this.request('PATCH', e, Hf(n, t));
        }
        post(e, t, n = {}) {
          return this.request('POST', e, Hf(n, t));
        }
        put(e, t, n = {}) {
          return this.request('PUT', e, Hf(n, t));
        }
      }
      class Bf {
        constructor(e, t) {
          (this.next = e), (this.interceptor = t);
        }
        handle(e) {
          return this.interceptor.intercept(e, this.next);
        }
      }
      const qf = new ke('HTTP_INTERCEPTORS');
      class Gf {
        intercept(e, t) {
          return t.handle(e);
        }
      }
      const Wf = /^\)\]\}',?\n/;
      class Zf {}
      class Qf {
        constructor() {}
        build() {
          return new XMLHttpRequest();
        }
      }
      class Kf {
        constructor(e) {
          this.xhrFactory = e;
        }
        handle(e) {
          if ('JSONP' === e.method)
            throw new Error(
              'Attempted to construct Jsonp request without JsonpClientModule installed.'
            );
          return new w(t => {
            const n = this.xhrFactory.build();
            if (
              (n.open(e.method, e.urlWithParams),
              e.withCredentials && (n.withCredentials = !0),
              e.headers.forEach((e, t) => n.setRequestHeader(e, t.join(','))),
              e.headers.has('Accept') ||
                n.setRequestHeader(
                  'Accept',
                  'application/json, text/plain, */*'
                ),
              !e.headers.has('Content-Type'))
            ) {
              const t = e.detectContentTypeHeader();
              null !== t && n.setRequestHeader('Content-Type', t);
            }
            if (e.responseType) {
              const t = e.responseType.toLowerCase();
              n.responseType = 'json' !== t ? t : 'text';
            }
            const r = e.serializeBody();
            let s = null;
            const l = () => {
                if (null !== s) return s;
                const t = 1223 === n.status ? 204 : n.status,
                  r = n.statusText || 'OK',
                  l = new Nf(n.getAllResponseHeaders()),
                  i =
                    (function(e) {
                      return 'responseURL' in e && e.responseURL
                        ? e.responseURL
                        : /^X-Request-URL:/m.test(e.getAllResponseHeaders())
                        ? e.getResponseHeader('X-Request-URL')
                        : null;
                    })(n) || e.url;
                return (s = new Ff({
                  headers: l,
                  status: t,
                  statusText: r,
                  url: i,
                }));
              },
              i = () => {
                let { headers: r, status: s, statusText: i, url: o } = l(),
                  a = null;
                204 !== s &&
                  (a = void 0 === n.response ? n.responseText : n.response),
                  0 === s && (s = a ? 200 : 0);
                let u = s >= 200 && s < 300;
                if ('json' === e.responseType && 'string' == typeof a) {
                  const e = a;
                  a = a.replace(Wf, '');
                  try {
                    a = '' !== a ? JSON.parse(a) : null;
                  } catch (c) {
                    (a = e), u && ((u = !1), (a = { error: c, text: a }));
                  }
                }
                u
                  ? (t.next(
                      new jf({
                        body: a,
                        headers: r,
                        status: s,
                        statusText: i,
                        url: o || void 0,
                      })
                    ),
                    t.complete())
                  : t.error(
                      new $f({
                        error: a,
                        headers: r,
                        status: s,
                        statusText: i,
                        url: o || void 0,
                      })
                    );
              },
              o = e => {
                const { url: r } = l(),
                  s = new $f({
                    error: e,
                    status: n.status || 0,
                    statusText: n.statusText || 'Unknown Error',
                    url: r || void 0,
                  });
                t.error(s);
              };
            let a = !1;
            const u = r => {
                a || (t.next(l()), (a = !0));
                let s = { type: Lf.DownloadProgress, loaded: r.loaded };
                r.lengthComputable && (s.total = r.total),
                  'text' === e.responseType &&
                    n.responseText &&
                    (s.partialText = n.responseText),
                  t.next(s);
              },
              c = e => {
                let n = { type: Lf.UploadProgress, loaded: e.loaded };
                e.lengthComputable && (n.total = e.total), t.next(n);
              };
            return (
              n.addEventListener('load', i),
              n.addEventListener('error', o),
              e.reportProgress &&
                (n.addEventListener('progress', u),
                null !== r &&
                  n.upload &&
                  n.upload.addEventListener('progress', c)),
              n.send(r),
              t.next({ type: Lf.Sent }),
              () => {
                n.removeEventListener('error', o),
                  n.removeEventListener('load', i),
                  e.reportProgress &&
                    (n.removeEventListener('progress', u),
                    null !== r &&
                      n.upload &&
                      n.upload.removeEventListener('progress', c)),
                  n.abort();
              }
            );
          });
        }
      }
      const Jf = new ke('XSRF_COOKIE_NAME'),
        Yf = new ke('XSRF_HEADER_NAME');
      class Xf {}
      class em {
        constructor(e, t, n) {
          (this.doc = e),
            (this.platform = t),
            (this.cookieName = n),
            (this.lastCookieString = ''),
            (this.lastToken = null),
            (this.parseCount = 0);
        }
        getToken() {
          if ('server' === this.platform) return null;
          const e = this.doc.cookie || '';
          return (
            e !== this.lastCookieString &&
              (this.parseCount++,
              (this.lastToken = Uo(e, this.cookieName)),
              (this.lastCookieString = e)),
            this.lastToken
          );
        }
      }
      class tm {
        constructor(e, t) {
          (this.tokenService = e), (this.headerName = t);
        }
        intercept(e, t) {
          const n = e.url.toLowerCase();
          if (
            'GET' === e.method ||
            'HEAD' === e.method ||
            n.startsWith('http://') ||
            n.startsWith('https://')
          )
            return t.handle(e);
          const r = this.tokenService.getToken();
          return (
            null === r ||
              e.headers.has(this.headerName) ||
              (e = e.clone({ headers: e.headers.set(this.headerName, r) })),
            t.handle(e)
          );
        }
      }
      class nm {
        constructor(e, t) {
          (this.backend = e), (this.injector = t), (this.chain = null);
        }
        handle(e) {
          if (null === this.chain) {
            const e = this.injector.get(qf, []);
            this.chain = e.reduceRight((e, t) => new Bf(e, t), this.backend);
          }
          return this.chain.handle(e);
        }
      }
      class rm {
        static disable() {
          return { ngModule: rm, providers: [{ provide: tm, useClass: Gf }] };
        }
        static withOptions(e = {}) {
          return {
            ngModule: rm,
            providers: [
              e.cookieName ? { provide: Jf, useValue: e.cookieName } : [],
              e.headerName ? { provide: Yf, useValue: e.headerName } : [],
            ],
          };
        }
      }
      class sm {}
      class lm {}
      var im = wo(xo, [So], function(e) {
        return (function(e) {
          const t = {},
            n = [];
          let r = !1;
          for (let s = 0; s < e.length; s++) {
            const l = e[s];
            l.token === Rt && !0 === l.value && (r = !0),
              1073741824 & l.flags && n.push(l.token),
              (l.index = s),
              (t[Jn(l.token)] = l);
          }
          return {
            factory: null,
            providersByKey: t,
            providers: e,
            modules: n,
            isRoot: r,
          };
        })([
          Rr(512, ln, on, [[8, [ep, vp, ef, lf, hf, mf, Ef]], [3, ln], $e]),
          Rr(5120, Gs, Zl, [[3, Gs]]),
          Rr(4608, Mo, Lo, [Gs, [2, Vo]]),
          Rr(5120, Es, Ql, [cl]),
          Rr(5120, Fs, js, []),
          Rr(5120, Nn, Gl, []),
          Rr(5120, On, Wl, []),
          Rr(4608, Gu, Wu, [zo]),
          Rr(6144, kt, null, [Gu]),
          Rr(4608, Fu, $u, []),
          Rr(
            5120,
            ou,
            function(e, t, n, r, s, l, i, o) {
              return [new Lu(e, t, n), new qu(r), new Hu(s, l, i, o)];
            },
            [zo, cl, zs, zo, zo, Fu, qs, [2, ju]]
          ),
          Rr(4608, au, au, [ou, cl]),
          Rr(135680, hu, hu, [zo]),
          Rr(4608, vu, vu, [au, hu, Fs]),
          Rr(6144, pn, null, [vu]),
          Rr(6144, cu, null, [hu]),
          Rr(4608, yl, yl, [cl]),
          Rr(5120, hh, Gd, [Cd]),
          Rr(4608, Pd, Pd, []),
          Rr(6144, Id, null, [Pd]),
          Rr(135680, Dd, Dd, [Cd, Rl, Xs, Dt, Id]),
          Rr(4608, Rd, Rd, []),
          Rr(5120, Vd, $d, [Cd, Wo, Md]),
          Rr(5120, Kd, Qd, [Wd]),
          Rr(
            5120,
            Bs,
            function(e) {
              return [e];
            },
            [Kd]
          ),
          Rr(4608, jp, jp, []),
          Rr(4608, Vg, Vg, []),
          Rr(4608, Xf, em, [zo, zs, Jf]),
          Rr(4608, tm, tm, [Xf, Yf]),
          Rr(
            5120,
            qf,
            function(e) {
              return [e];
            },
            [tm]
          ),
          Rr(4608, Qf, Qf, []),
          Rr(6144, Zf, null, [Qf]),
          Rr(4608, Kf, Kf, [Zf]),
          Rr(6144, Af, null, [Kf]),
          Rr(4608, Tf, nm, [Af, Dt]),
          Rr(4608, zf, zf, [Tf]),
          Rr(4608, zg, zg, [$g]),
          Rr(4608, op, op, [zs, [2, zf], Gu, rp]),
          Rr(1073742336, Ho, Ho, []),
          Rr(1024, Xe, tc, []),
          Rr(
            1024,
            kl,
            function() {
              return [Fd()];
            },
            []
          ),
          Rr(512, Wd, Wd, [Dt]),
          Rr(
            1024,
            Ls,
            function(e, t) {
              return [
                ((n = e),
                su('probe', iu),
                su(
                  'coreTokens',
                  Object.assign(
                    {},
                    lu,
                    (n || []).reduce((e, t) => ((e[t.name] = t.token), e), {})
                  )
                ),
                () => iu),
                Zd(t),
              ];
              var n;
            },
            [[2, kl], Wd]
          ),
          Rr(512, Us, Us, [[2, Ls]]),
          Rr(131584, Ol, Ol, [cl, qs, Dt, Xe, ln, Us]),
          Rr(1073742336, Kl, Kl, [Ol]),
          Rr(1073742336, nc, nc, [[3, nc]]),
          Rr(1024, Ld, zd, [[3, Cd]]),
          Rr(512, zc, Bc, []),
          Rr(512, Ad, Ad, []),
          Rr(256, Md, {}, []),
          Rr(1024, To, Hd, [ko, [2, Ao], Md]),
          Rr(512, No, No, [To, ko]),
          Rr(512, Xs, Xs, []),
          Rr(512, Rl, Ll, [Xs, [2, Vl]]),
          Rr(
            1024,
            fd,
            function() {
              return [
                [
                  { path: '', component: gp },
                  { path: 'forms', component: Qg },
                  { path: 'resources', component: tf },
                  { path: 'about', component: of },
                  { path: '**', component: df },
                ],
              ];
            },
            []
          ),
          Rr(1024, Cd, qd, [
            Ol,
            zc,
            Ad,
            No,
            Dt,
            Rl,
            Xs,
            fd,
            Md,
            [2, yd],
            [2, pd],
          ]),
          Rr(1073742336, jd, jd, [
            [2, Ld],
            [2, Cd],
          ]),
          Rr(1073742336, lm, lm, []),
          Rr(1073742336, Dg, Dg, []),
          Rr(1073742336, Mg, Mg, []),
          Rr(1073742336, Lg, Lg, []),
          Rr(1073742336, rm, rm, []),
          Rr(1073742336, sm, sm, []),
          Rr(1073742336, hp, hp, []),
          Rr(1073742336, Bg, Bg, []),
          Rr(1073742336, Fg, Fg, []),
          Rr(1073742336, xo, xo, []),
          Rr(256, Rt, !0, []),
          Rr(256, Jf, 'XSRF-TOKEN', []),
          Rr(256, Yf, 'X-XSRF-TOKEN', []),
          Rr(256, $g, {}, []),
          Rr(
            256,
            rp,
            {
              gfm: !0,
              tables: !0,
              breaks: !1,
              pedantic: !1,
              sanitize: !1,
              smartLists: !0,
              smartypants: !1,
            },
            []
          ),
        ]);
      });
      (function() {
        if (tt)
          throw new Error('Cannot enable prod mode after platform setup.');
        et = !1;
      })(),
        ec()
          .bootstrapModuleFactory(im)
          .catch(e => console.error(e));
    },
    zn8P: function(e, t) {
      function n(e) {
        return Promise.resolve().then(function() {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        });
      }
      (n.keys = function() {
        return [];
      }),
        (n.resolve = n),
        (e.exports = n),
        (n.id = 'zn8P');
    },
  },
  [[0, 0]],
]);
