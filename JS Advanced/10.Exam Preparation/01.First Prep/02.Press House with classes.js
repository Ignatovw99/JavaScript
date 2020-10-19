function solve() {

    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return [
                `Title: ${this.title}`,
                `Content: ${this.content}`
            ].join('\n');
        }
    }

    class ShortReports extends Article {
        constructor(title, content, originalResearches) {
            super(title, content);
            this.originalResearches = originalResearches;
            this.comments = [];
        }

        get content() {
            return this._content;
        }

        set content(value) {
            if (value.length >= 150) {
                throw new Error('Short reports content should be less then 150 symbols.');
            }
            this._content = value;
        }

        get originalResearches() {
            return this._originalResearches;
        }

        set originalResearches(value) {
            if (!value || !value.hasOwnProperty('title') || !value.author) {
                throw new Error('The original research should have author and title.');
            }
            this._originalResearches = value;
        }

        addComment(comment) {
            this.comments.push(comment);
            return 'The comment is added.';
        }

        toString() {
            const result = [
                super.toString(),
                `Original Research: ${this.originalResearches.title} by ${this.originalResearches.author}`
            ];

            if (this.comments.length > 0) {
                result.push('Comments:');
                this.comments.forEach(c => result.push(c));
            }
            return result.join('\n');
        }
    }

    class BookReview extends Article {

        constructor(title, content, book) {
            super(title, content);
            this.book = book;
            this.clients = [];
        }

        addClient(clientName, orderDescription) {
            if (this.clients.find(c => c.clientName === clientName)) {
                throw new Error('This client has already ordered this review.');
            } else {
                this.clients.push({clientName, orderDescription});
                return `${clientName} has ordered a review for ${this.book.name}`;
            }
        }

        toString() {
            const result = [
                super.toString(),
                `Book: ${this.book.name}`
            ];

            if (this.clients.length > 0) {
                result.push('Orders:');
                this.clients.forEach(c => result.push(`${c.clientName} - ${c.orderDescription}`));
            }
            return result.join('\n');
        }
    }

    return {
        Article,
        ShortReports,
        BookReview
    };
}

let classes = solve();

let ShortReports = new classes.ShortReports('Title', 'Content 123', {  });
