/**
 * PDF Generator for Travel Plan
 * 여행 계획서를 PDF로 변환하는 스크립트
 *
 * Usage:
 *   node pdf-generator.js [options]
 *
 * Options:
 *   --all          전체 문서 PDF 생성
 *   --days         Day 1-9만 PDF 생성
 *   --guides       가이드 문서만 PDF 생성
 *   --single=FILE  특정 파일만 PDF 생성
 *   --output=DIR   출력 디렉토리 지정 (기본: ./pdf-output)
 */

const fs = require('fs').promises;
const path = require('path');
const { marked } = require('marked');

// ============================================
// Configuration
// ============================================
const CONFIG = {
    baseDir: __dirname,
    outputDir: path.join(__dirname, 'pdf-output'),
    templatesDir: path.join(__dirname, 'pdf-templates'),

    // PDF 생성할 파일 그룹
    groups: {
        all: [
            'README.md',
            'days/day-01.md',
            'days/day-02.md',
            'days/day-03.md',
            'days/day-04.md',
            'days/day-05.md',
            'days/day-06.md',
            'days/day-07.md',
            'days/day-08.md',
            'days/day-09.md',
            'guides/family-tips.md',
            'guides/packing-list.md',
            'budget/overview.md',
        ],
        days: [
            'days/day-01.md',
            'days/day-02.md',
            'days/day-03.md',
            'days/day-04.md',
            'days/day-05.md',
            'days/day-06.md',
            'days/day-07.md',
            'days/day-08.md',
            'days/day-09.md',
        ],
        guides: [
            'guides/family-tips.md',
            'guides/packing-list.md',
            'budget/overview.md',
        ]
    }
};

// ============================================
// HTML Template Generator
// ============================================
function generateHTMLTemplate(content, options = {}) {
    const {
        title = 'Travel Plan',
        includeHeader = true,
        includeFooter = true,
        includeTOC = false
    } = options;

    return `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="../print.css">
    <style>
        body {
            font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 210mm;
            margin: 0 auto;
            padding: 20px;
            background: white;
        }

        /* Cover Page */
        .cover-page {
            text-align: center;
            padding: 100px 0;
            page-break-after: always;
        }

        .cover-page h1 {
            font-size: 36px;
            margin-bottom: 20px;
        }

        .cover-page .subtitle {
            font-size: 20px;
            color: #666;
            margin-bottom: 40px;
        }

        .cover-page .metadata {
            font-size: 14px;
            color: #333;
            margin-top: 80px;
        }

        /* Table of Contents */
        .toc {
            page-break-after: always;
            margin: 40px 0;
        }

        .toc h2 {
            border-bottom: 2px solid #333;
            padding-bottom: 10px;
        }

        .toc ul {
            list-style: none;
            padding: 0;
        }

        .toc li {
            margin: 10px 0;
            padding-left: 20px;
        }

        .toc a {
            text-decoration: none;
            color: #333;
        }

        /* Content Styling */
        .markdown-body {
            font-size: 11pt;
        }

        .markdown-body h1 {
            font-size: 24pt;
            border-bottom: 2pt solid #000;
            padding-bottom: 8pt;
            margin-top: 20pt;
        }

        .markdown-body h2 {
            font-size: 18pt;
            margin-top: 16pt;
            color: #000;
        }

        .markdown-body h3 {
            font-size: 14pt;
            margin-top: 12pt;
        }

        .markdown-body table {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
        }

        .markdown-body table th,
        .markdown-body table td {
            border: 1px solid #333;
            padding: 8px;
            text-align: left;
        }

        .markdown-body table th {
            background: #f0f0f0;
            font-weight: bold;
        }

        .markdown-body pre {
            background: #f5f5f5;
            border: 1px solid #ddd;
            padding: 10px;
            overflow-x: auto;
        }

        .markdown-body code {
            background: #f5f5f5;
            padding: 2px 4px;
            font-size: 90%;
        }

        /* Print Header/Footer */
        .print-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 50px;
            background: white;
            border-bottom: 1px solid #ccc;
            padding: 10px 20px;
            font-size: 10pt;
            color: #666;
        }

        .print-footer {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 40px;
            background: white;
            border-top: 1px solid #ccc;
            padding: 10px 20px;
            text-align: center;
            font-size: 9pt;
            color: #666;
        }

        /* Page Numbers */
        .page-number:after {
            counter-increment: page;
            content: "Page " counter(page);
        }
    </style>
</head>
<body>
    ${includeHeader ? `
    <div class="print-header no-print">
        <strong>🗺️ 프랑스-독일 가족여행 플랜</strong>
        <span style="float: right;">2025.11.21-29</span>
    </div>
    ` : ''}

    ${includeTOC ? `
    <div class="toc">
        <h2>📑 목차</h2>
        <ul id="toc-list"></ul>
    </div>
    ` : ''}

    <div class="markdown-body">
        ${content}
    </div>

    ${includeFooter ? `
    <div class="print-footer no-print">
        <div class="page-number"></div>
        <div>Generated: ${new Date().toLocaleDateString('ko-KR')}</div>
    </div>
    ` : ''}

    <script>
        // Auto-generate TOC if enabled
        ${includeTOC ? `
        document.addEventListener('DOMContentLoaded', function() {
            const tocList = document.getElementById('toc-list');
            const headings = document.querySelectorAll('.markdown-body h2, .markdown-body h3');

            headings.forEach((heading, index) => {
                const id = 'heading-' + index;
                heading.id = id;

                const li = document.createElement('li');
                li.style.paddingLeft = heading.tagName === 'H3' ? '40px' : '20px';

                const a = document.createElement('a');
                a.href = '#' + id;
                a.textContent = heading.textContent;

                li.appendChild(a);
                tocList.appendChild(li);
            });
        });
        ` : ''}
    </script>
</body>
</html>`;
}

// ============================================
// Markdown to HTML Converter
// ============================================
async function convertMarkdownToHTML(markdownPath, outputPath, options = {}) {
    try {
        // Read markdown file
        const markdown = await fs.readFile(markdownPath, 'utf-8');

        // Configure marked
        marked.setOptions({
            breaks: true,
            gfm: true,
            headerIds: true,
            mangle: false
        });

        // Convert to HTML
        const htmlContent = marked.parse(markdown);

        // Generate full HTML document
        const fullHTML = generateHTMLTemplate(htmlContent, {
            title: options.title || path.basename(markdownPath, '.md'),
            includeHeader: options.includeHeader !== false,
            includeFooter: options.includeFooter !== false,
            includeTOC: options.includeTOC || false
        });

        // Write HTML file
        await fs.mkdir(path.dirname(outputPath), { recursive: true });
        await fs.writeFile(outputPath, fullHTML, 'utf-8');

        console.log(`✅ Generated: ${outputPath}`);
        return outputPath;
    } catch (error) {
        console.error(`❌ Error converting ${markdownPath}:`, error.message);
        throw error;
    }
}

// ============================================
// Combined PDF Generator
// ============================================
async function generateCombinedHTML(files, outputPath, options = {}) {
    try {
        const combinedContent = [];

        // Add cover page
        combinedContent.push(`
            <div class="cover-page">
                <h1>🇫🇷🇩🇪 프랑스-독일 가족여행 플랜</h1>
                <div class="subtitle">2025년 11월 21일 - 11월 29일 (9일 8박)</div>
                <div class="metadata">
                    <p><strong>구성원:</strong> 6인 가족</p>
                    <p><strong>테마:</strong> 샴페인 + 동화 속 성 + 알자스 와인 마을 + 디즈니</p>
                    <p><strong>생성일:</strong> ${new Date().toLocaleDateString('ko-KR')}</p>
                </div>
            </div>
        `);

        // Process each file
        for (const file of files) {
            const filePath = path.join(CONFIG.baseDir, file);
            const markdown = await fs.readFile(filePath, 'utf-8');
            const html = marked.parse(markdown);

            combinedContent.push(`
                <div class="page-break-before">
                    <div class="section-marker">${file}</div>
                    ${html}
                </div>
            `);
        }

        // Generate full HTML
        const fullHTML = generateHTMLTemplate(combinedContent.join('\n\n'), {
            title: '프랑스-독일 가족여행 완전 가이드',
            includeHeader: true,
            includeFooter: true,
            includeTOC: true
        });

        // Write file
        await fs.mkdir(path.dirname(outputPath), { recursive: true });
        await fs.writeFile(outputPath, fullHTML, 'utf-8');

        console.log(`✅ Combined HTML generated: ${outputPath}`);
        return outputPath;
    } catch (error) {
        console.error('❌ Error generating combined HTML:', error.message);
        throw error;
    }
}

// ============================================
// CLI Interface
// ============================================
async function main() {
    const args = process.argv.slice(2);
    const options = {
        mode: 'all',
        output: CONFIG.outputDir,
        single: null
    };

    // Parse arguments
    args.forEach(arg => {
        if (arg === '--all') options.mode = 'all';
        else if (arg === '--days') options.mode = 'days';
        else if (arg === '--guides') options.mode = 'guides';
        else if (arg.startsWith('--single=')) options.single = arg.split('=')[1];
        else if (arg.startsWith('--output=')) options.output = arg.split('=')[1];
    });

    console.log('📄 PDF Generator for Travel Plan');
    console.log('=================================\n');

    try {
        // Create output directory
        await fs.mkdir(options.output, { recursive: true });

        if (options.single) {
            // Generate single file
            const inputPath = path.join(CONFIG.baseDir, options.single);
            const outputPath = path.join(
                options.output,
                path.basename(options.single, '.md') + '.html'
            );
            await convertMarkdownToHTML(inputPath, outputPath);
        } else {
            // Generate group files
            const files = CONFIG.groups[options.mode];

            // Generate individual HTML files
            for (const file of files) {
                const inputPath = path.join(CONFIG.baseDir, file);
                const outputPath = path.join(
                    options.output,
                    file.replace('.md', '.html')
                );
                await convertMarkdownToHTML(inputPath, outputPath);
            }

            // Generate combined HTML
            const combinedPath = path.join(
                options.output,
                `travel-plan-${options.mode}-combined.html`
            );
            await generateCombinedHTML(files, combinedPath, {
                includeTOC: true
            });
        }

        console.log('\n✅ PDF generation completed!');
        console.log(`📁 Output directory: ${options.output}`);
        console.log('\n💡 Next steps:');
        console.log('   1. Open the HTML files in a browser');
        console.log('   2. Press Ctrl+P (Cmd+P on Mac)');
        console.log('   3. Select "Save as PDF"');
        console.log('   4. Choose "print.css" for optimal formatting');

    } catch (error) {
        console.error('\n❌ Error:', error.message);
        process.exit(1);
    }
}

// ============================================
// Run if called directly
// ============================================
if (require.main === module) {
    main();
}

module.exports = {
    generateHTMLTemplate,
    convertMarkdownToHTML,
    generateCombinedHTML,
    CONFIG
};
