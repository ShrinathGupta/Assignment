const fs = require("fs");
import TreeNode from "../treeNode/treeNode";
import response from "../interface/response";
import request from "../interface/request";

export default class Helpers {
  addStory(data: request) {
    let record = new TreeNode();
        record.addNode(data, data?.parentId)
     return true;
  }
  getStory(id: any = null) : response {
    let record = new TreeNode();
    return record.getNodes(id);
  }
}