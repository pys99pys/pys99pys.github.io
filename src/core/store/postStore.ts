import { observable, action } from 'mobx';
import { PostItem } from 'core/interface/post';

export default class {
  @observable posts: PostItem[] = [];

  @action setPosts = (posts: PostItem[]) => {
    this.posts = posts;
  };
}
