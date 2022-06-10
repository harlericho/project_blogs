<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3">
        <div class="card" id="card">
          <div class="card-body" id="card-body">
            <h5 class="card-title">Form</h5>
            <form method="POST" v-on:submit.prevent="onSubmit()">
              <input type="hidden" v-model="blogs.id" />
              <div class="mb-3">
                <label for="title" class="form-label">Title:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="blogs.title"
                  ref="title"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="autor" class="form-label">Autor:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="blogs.autor"
                  ref="autor"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">Content:</label>
                <textarea
                  class="form-control"
                  v-model="blogs.content"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-sm" id="margin">
                Create
              </button>
              <button
                type="button"
                class="btn btn-danger btn-sm"
                v-on:click="clearForm()"
              >
                Clear
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-sm-9">
        <div class="card" id="card">
          <div class="card-body" id="card-body">
            <h5 class="card-title">List</h5>
            <div class="table table-responsive-sm">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Autor</th>
                    <th scope="col">Content</th>
                    <th scope="col">Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(blog, i) in blogsList" :key="blog.id">
                    <th scope="row">{{ i + 1 }}</th>
                    <td>{{ blog.title }}</td>
                    <td>{{ blog.autor }}</td>
                    <td>{{ blog.content }}</td>
                    <td>
                      <button
                        class="btn btn-primary btn-sm"
                        @click="editBlog(blog)"
                        id="margin"
                      >
                        Edit
                      </button>
                      <button
                        class="btn btn-danger btn-sm"
                        @click="deleteBlog(blog)"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const URL = "http://localhost:9000/api/blogs";
export default {
  data() {
    return {
      blogs: {
        id: 0,
        title: "",
        autor: "",
        content: "",
      },
      blogsList: [],
    };
  },
  mounted() {
    this.getDataBlogs();
    this.$refs.title.focus();
  },
  methods: {
    getDataBlogs() {
      fetch(URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.blogsList = data.data;
        })
        .catch((error) => console.log(error));
    },
    onSubmit() {
      if (this.blogs.id === 0) {
        this.createBlog();
      } else {
        this.updateBlog();
      }
    },
    createBlog() {
      fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.blogs),
      })
        .then((response) => response.json())
        .then((data) => {
          this.getDataBlogs();
          this.clearForm();
          alert(data.data);
        })
        .catch((error) => console.log(error));
    },
    updateBlog() {
      fetch(URL + "/" + this.blogs.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.blogs),
      })
        .then((response) => response.json())
        .then((data) => {
          this.getDataBlogs();
          this.clearForm();
          alert(data.data);
        })
        .catch((error) => console.log(error));
    },
    editBlog(blog) {
      this.blogs.id = blog.id;
      this.blogs.title = blog.title;
      this.blogs.autor = blog.autor;
      this.blogs.content = blog.content;
      this.$refs.title.focus();
    },
    deleteBlog(blog) {
      if (confirm("Are you sure you want to delete this blog?")) {
        fetch(URL + "/" + blog.id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            this.getDataBlogs();
            alert(data.data);
          })
          .catch((error) => console.log(error));
      }
    },

    clearForm() {
      this.blogs = {
        id: 0,
        title: "",
        autor: "",
        content: "",
      };
      this.$refs.title.focus();
    },
  },
};
</script>

<style>
#margin {
  margin-right: 4px;
}
</style>
