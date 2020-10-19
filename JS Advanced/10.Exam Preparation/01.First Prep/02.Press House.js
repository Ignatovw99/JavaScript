function solve() {

    function Article(title, content) {
        this.title = title;
        this.content = content;
    }

    Article.prototype.toString = function() {
        return `Title: ${this.title}\nContent: ${this.content}`
    }

    function ShortReports(title, content, originalResearches) {
        if (content >= 150) {
            throw Error('Short reports content should be less then 150 symbols.');
        }
        if (!originalResearches || !originalResearches.title || !originalResearches.author) {
            throw Error('The original research should have author and title.');
        }
        Article.call(this, title, content);
        this.originalResearches = originalResearches;
        this.comments = [];
    }

    ShortReports.prototype = Object.create(Article.prototype);

    ShortReports.prototype.addComment = function(comment) {
        this.comments.push(comment);
        return 'The comment is added.';
    }

    ShortReports.prototype.toString = function() {
        let result = Article.prototype.toString.call(this);
        result += `\nOriginal Research: ${this.originalResearches.title} by ${this.originalResearches.author}\n`;
        result += 'Comments\n';
        result += this.comments.join('\n');
        return result;
    }

    function BookReview(title, content, book) {
        
    }

    return {
        Article,
        ShortReports,
        BookReview
    }
}

let classes =solve();
let lorem = new classes.Article('Lorem', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel…');
console.log(lorem.toString()); 

let short = new classes.ShortReports('SpaceX and Javascript', `Yes, its damn true.Spac
eX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Ja
vascript. What are your views on this `, { title: 'Dragon 2', author: 'wikipedia.org' });

console.log(short.addComment('Thank god they didnt use java.'))
short.addComment('In the end JavaScript&quot;s features are executed in C++ — the underlying language.')
console.log(short.toString());