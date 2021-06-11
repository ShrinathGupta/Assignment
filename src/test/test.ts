
var expect    = require("chai").expect;
import TreeNode from '../treeNode/treeNode';
import Helpers from '../helpers/helper';
const helperObject = new Helpers();
const data = { parentId: 'root', story1: 'Test' }

describe("Add Record", function() {
	it('Checking for insertion of data',()=>{
	const testObject = helperObject.addStory(data);
	expect(testObject).to.equal(true);
	expect(TreeNode.data.length).to.equal(1);
	});

});
describe("Fetch Record", function() {
	it("Check parameters exist or not while fetching records", function() {
	const testObject = helperObject.getStory('root');
	 expect(testObject).to.have.property('parentId');
	 expect(testObject).to.have.property('data');
	});
	
	it('Check expected response from fetch record', () => {
		helperObject.addStory(data);
		const testResponse = helperObject.getStory('root');
		expect(testResponse).to.have.property('parentId');
		expect(testResponse).to.have.property('data');
		expect(testResponse.parentId).to.be.equal('root');
		expect(testResponse.data.story1?.text).to.be.equal('Test');

	
	})
});