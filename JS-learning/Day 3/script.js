const postBtn = document.getElementById("postBtn");
const commentInput = document.getElementById("commentInput");
const commentsSection = document.getElementById("commentsSection");

postBtn.addEventListener("click", function () {
  const text = commentInput.value.trim();

  if (text !== "") {
    const comment = document.createElement("div");
    comment.className = "comment";
    comment.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
      comment.remove();
    });

    comment.appendChild(deleteBtn);
    commentsSection.appendChild(comment);

    commentInput.value = "";
  }

    // Add keyboard support for the "Enter" key
    commentInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            postBtn.click();
        }
    });
});
