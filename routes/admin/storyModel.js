const Story = require("../stories/storySchema");

module.exports = {
  approveStory,
  deleteStory,
  getPendingStories,
  rejectStory
};

function approveStory(id, story) {
  return Story.findByIdAndUpdate(
    id,
    { ...story, verified: true },
    { new: true }
  );
}

function deleteStory(id) {
  return Story.findByIdAndDelete(id).exec();
}

function getPendingStories() {
  return Story.find({ verified: false }).exec();
}

function rejectStory(id) {
  return Story.findByIdAndDelete(id).exec();
}
