// API

// Application Programing Interface - giao diện lập trình ứng dụng

// Giao thức/Quy tắc cho phép các ứng dụng/hệ thống/dịch vụ tương tác/giao tiếp với nhau

// Có 2 phần : Server (APIs) và Client

// HTTP = Hypertext Transfer Protocol - Giao thức truyền tải dữ liệu siêu văn bản

// HTTP Message - 2 dạng: Request/Respone

// 3 phần:  - Start line:
//              + Request gồm Method(HTTP Verbs: GET POST PUSH DELETE) và Path và HTTP version
//              + Respond trả lại status
//          - Header
//          - Body

// GET: Lấy dữ liệu/truy cập nội dung (Thành công: trả lại 200)
// POST: Tạo mới nội dung (Đăng ký, post bài, comment, ...) (201)
// PUSH: Sửa đổi nội dung hiện có (200)
// DELETE: Xoá dữ liệu (200 hoặc 204 - No Content (đã xoá thành công hoặc không còn dữ liệu nữa))

// Ví dụ:

// GET /posts/1
// Header: Authorization ...

// POST /posts
// Header: Authorization .../Cookie
// Body: {title:"", content:"", ...}

// Status là số từ 100 - 500
// 1xx: Pending
// 2xx: Success:
//              (200 - OK)
//              (201 - Created)
//              (204 - No Content)
// 3xx: Redirect:
//              (301, 302, 304)
//
// 4xx: Client Error ( 404 Not Found (Truy cập vào nội dung không tồn tại)
//                     401 Unauthorize(truy cập vào nơi vượt quá quyền hạn)
//                     403 Forbiden (Hành vi này không được phép)
//                     400 Bad Request, ....
// 5xx: Server Error (500)

// Reload page để gửi nội dung/ nhận nội dung mới

//AJAX - kỹ thuật cho phép gửi/ nhận dữ liệu mà không cần phải reload trang
// không cần reload trang - giúp trang web có tính tương tác hơn
// Gửi/ nhận 1 phần nhỏ dữ liệu - tương tác nhanh hơn, giảm dung lượng network

// {friendId: '123123', content:'Chào Nhi'}

// XHR - Cũ
// fetch - Mới(Promise)

const $user = $("#user-table");

const createUserRow = (user) => {
  return `
    <tr>
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.email}</td>
    </tr>`;
};

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((json) => {
    const users = json.map(createUserRow);

    $user.append(...users);
  });

// User => Bồi bàn => Phản hồi lại (Đồ ăn/hết món/...)
// Hiển thị 1 bảng ID/Email (link) sử dụng jQuery

function e(tagName, attributes, ...child) {
  const tag = document.createElement(tagName);

  Object.assign(tag, attributes);

  tag.append(...child);

  return tag;
}

// Posts/posts

// const $post = $(".list-post");

// const createPost = (post) => {
//   return `

//     <p>${post.id}</p>
//     <h3>${post.title}</h3>
//     <p>${post.body}</p>
//         `;
// };

// fetch("https://jsonplaceholder.typicode.com/postss")
//   .then((res) => {
//     if (200 <= res.status && res.status <= 300) return res.json;
//     else throw res.json();
//   })
//   .then((json) => {
//     const posts = json.map(createPost);

//     $post.append(...posts);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// 3 trạng thái của request
// Pending - Fulfiled - Rejected

// jQuery.ajax()
// axios
const $post = $(".list-post");
const createPost = (post) => {
  return `

    <p>${post.id}</p>
    <h3>${post.title}</h3>
    <p>${post.body}</p>
        `;
};

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(({ data, headers }) => {
    const posts = data.map(createPost);

    $post.append(...posts);
  });

const $form = $("#post-form");

$form
  .on("submit", function (e) {
    e.preventDefault();

    const $title = $("#title");
    const $body = $("#body");

    axios.post("https://jsonplaceholder.typicode.com/posts"),
      {
        userId: 1,
        title: $title.val(),
        body: $body.val(),
      };
  })
  .then((data) => {
    const posts = createPost(data);

    $post.preend(posts);
  });

// TODO LIST => Sử dụng API /todos
// Đọc, Thêm, sửa, xoá
// Validate form () khi người dùng k nhập
