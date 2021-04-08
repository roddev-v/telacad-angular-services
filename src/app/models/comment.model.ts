export class CommentModel {
    postId: number;
    id: number;
    email: string;
    body: string;

    constructor(obj: any) {
        Object.assign(this, obj);
    }
} 