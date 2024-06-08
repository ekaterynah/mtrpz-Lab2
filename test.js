const { expect } = require('chai');
const { parseMarkdown } = require('./index');

describe('parseMarkdown', function() {
    it('should parse bold text correctly', function() {
        const input = 'This is **bold** text';
        const output = parseMarkdown(input);
        expect(output).to.equal('<p>This is <b>bold</b> text </p>');
    });

    it('should parse italic text with underscores correctly', function() {
        const input = 'This is _italic_ text';
        const output = parseMarkdown(input);
        expect(output).to.equal('This is <i>italic text </p>');
    });

    it('should parse inline code correctly', function() {
        const input = 'This is `code` text';
        const output = parseMarkdown(input);
        expect(output).to.equal('<p>This is <tt>code</tt> text </p>');
    });

    it('should parse preformatted text correctly', function() {
        const input = '```\nPreformatted text\n```';
        const output = parseMarkdown(input);
        expect(output).to.equal('<pre>\nPreformatted text\n</pre>\n');
    });

    it('should parse bold text correctly with multiple occurrences', function() {
        const input = 'This is **bold** and **also bold** text';
        const output = parseMarkdown(input);
        expect(output).to.equal('<p>This is <b>bold</b> and <b>also bold</b> text </p>');
    });

    it('should parse italic text correctly with multiple occurrences', function() {
        const input = 'This is _italic and _also italic_ text';
        const output = parseMarkdown(input);
        expect(output).to.equal('<p>This is <i>italic</i> and <i>also italic</i> text </p>');
    });

    it('should parse inline code correctly with multiple occurrences', function() {
        const input = 'This is `code` and `also code` text';
        const output = parseMarkdown(input);
        expect(output).to.equal('<p>This is <tt>code</tt> and <tt>also code</tt> text </p>');
    });

    it('should parse a combination of formatting correctly', function() {
        const input = 'This is **bold** and _italic_ and `code` text';
        const output = parseMarkdown(input);
        expect(output).to.equal('<p>This is <b>bold</b> and <i>italic</i> and <tt>code</tt> text </p>');
    });

});
