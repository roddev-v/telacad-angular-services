import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { CommentModel } from "../models/comment.model";

@Injectable()
export class CommentsService {
    constructor(private httpClient: HttpClient) {
    }

    async getComments(): Promise<CommentModel[]> {
        const res: any = await this.httpClient.get(environment.url).toPromise();
        return res.map((result: any) => new CommentModel(result));
    }
}