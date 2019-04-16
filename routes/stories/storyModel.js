const Story = require("./storySchema");

module.exports = {
  addStory,
  getAllStories,
  getLatestStories
};

function addStory(story) {
  return Story.create(story);
}

function getAllStories() {
  return Story.find({ verified: true }).exec();
}

function getLatestStories() {
  return Story.find({ verified: true })
    .limit(3)
    .sort({ _id: -1 })
    .exec();
}
