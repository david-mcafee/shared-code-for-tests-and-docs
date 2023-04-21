export const saveSnippet = async (DataStore, Post, Comment, PostStatus) => {
  // region docs render lines 3 through 16
  const post = await DataStore.save(
    new Post({
      title: "My Post with comments",
      rating: 10,
      status: PostStatus.ACTIVE,
    })
  );

  await DataStore.save(
    new Comment({
      content: "Loving Amplify DataStore!",
      postID: post.id,
    })
  );
  //endregion
};
