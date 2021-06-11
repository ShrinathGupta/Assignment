
import response from "../interface/response";

export default class TreeNode {
	static data:any = [ ] // Store of application
	static count:number = 1; // Maintain unique ID of record
	 
	/**
	 * Function to add record in store
	 * @param data storynumber and text of story
	 * @param parentId parent id of stody node
	 * @returns true
	 */
	addNode(data:any, parentId: string) {	 
		let record = {id: TreeNode.count++, parentId: parentId === '/' ? 'root' :parentId, node: [data] }
		TreeNode.data.push(record);
		return true;
	}

	/**
	 * 
	 * @param id selected node id
	 * @returns stories of selected node [children of selected node]
	 */
	getNodes(id: string) : response{
		let response:any = {
			data:{}
		};
		 TreeNode.data.forEach((element:any) => {
			const {node} = element;
			if(element.id == id) {
			 if (node[0].hasOwnProperty("story1")) {
				 response.parentText = node[0].story1;
			 } else if (node[0].hasOwnProperty("story2")) {
				 response.parentText = node[0].story2;
			 } else if (node[0].hasOwnProperty("story3")) {
				 response.parentText = node[0].story3;
			 } else if (node[0].hasOwnProperty("story4")) {
				 response.parentText = node[0].story4;
			 }
			}
				if(element.parentId === id) {
				if (node[0].hasOwnProperty("story1")) {
					response.data.story1 = {id: element.id, text:node[0].story1 };
				} else if (node[0].hasOwnProperty("story2")) {
					response.data.story2 = {id: element.id, text:node[0].story2 };
				} else if (node[0].hasOwnProperty("story3")) {
					response.data.story3 = {id: element.id, text:node[0].story3 };	
				} else if (node[0].hasOwnProperty("story4")) {
					response.data.story4 = {id: element.id, text:node[0].story4 };
				}
			}
		});
		return {...response, parentId: id }

	}

}



