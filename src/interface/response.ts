export default interface response {
  parentId: string;
  parentText: string;
  data: {
    story1?: storyDetails;
    story2?: storyDetails;
    story3?: storyDetails;
    story4?: storyDetails;
  }
}
interface storyDetails {
  id: number;
  text: string;
}
