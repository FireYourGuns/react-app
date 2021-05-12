import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
      "API-KEY": "b3c57f67-b4e1-4144-b0d1-08d0b81333e0"
    }
})

export const usersAPI = {
  getUsers(pageSize = 5, currentPage) {
    return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => {
      return response.data
    })
  },
  unFollow(id) {
    return instance.delete(`follow/${id}`).then(response => {
      return response.data
    })
  },
  follow(id) {
    return instance.post(`follow/${id}`).then(response => {
      return response.data
    })
  },
}

export const profileAPI = {
  getProfileInfo(userID) {
    return instance.get(`profile/${userID}`).then( response => {
      return response.data;
    })
  },
  getUserStatus(userID) {
    return instance.get(`profile/status/${userID}`).then( response => {
      return response.data;
    })
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status: status}).then(response => {
      return response.data;
    })
  },
  sendPhoto(photo) {
    const formData = new FormData();
    formData.append("image", photo);
    return instance.put('profile/photo', formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
  },
  sentProfileInfo(profile) {
    return instance.put("profile", profile).then(response => {
      return response.data;
    })
  }
}

export const authAPI = {
  setUserData() {
    return instance.get(`auth/me`).then( response => {
      return response.data
    })
  },
  userAuthorization(email, password, rememberMe, captcha) {
    return instance.post(`auth/login`, {
      email: email,
      password: password,
      rememberMe: rememberMe,
      captcha: captcha
    }).then( response => {
      return response.data
    })
  },
  deleteAuthorization() {
    return instance.delete(`auth/login`).then(response => {
      return response.data
    })
  }
}

export const securityAPI = {
  receiveCaptcha: async () => {
    const response = await instance.get("security/get-captcha-url");
    return response.data.url
  }
}