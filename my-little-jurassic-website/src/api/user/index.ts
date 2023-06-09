import { userInstance } from "..";
import * as type from "./type";

/**
 * POST: 회원가입
 */
export async function postRegist(body: type.IRegistBody) {
  return userInstance.post("/users", body);
}

/**
 * GET: 유저 아이디 중복 체크
 */
export async function getCheckUid(params: type.ICheckUidParams) {
  return userInstance.get("/users/check-uid", { params });
}

/**
 * GET: 닉네임 중복 체크
 */
export async function getCheckNickname(params: type.ICheckNicknameParams) {
  return userInstance.get("/users/check-nickname", { params });
}

/**
 * POST: 로그인
 */
export async function postLogin(body: type.ILoginBody) {
  return userInstance.post("/login", body);
}

/**
 * GET: 로그아웃
 */
export async function getLogout(params: type.ILogoutParms) {
  return userInstance.get("/logout", { params });
}

/**
 * GET: 토큰 재발급
 */
export async function getRefresh() {
  return userInstance.get("/refresh");
}

/**
 * GET: 유저 아이디 찾기
 */
export async function getFindUid(params: type.IFindUidParams) {
  return userInstance.get("/users/find-pk", { params });
}

/**
 * GET: 유저 비밀번호 찾기
 */
export async function getFinedPwd(params: type.IFindPwdParams) {
  return userInstance.get("/users/find-pwd", { params });
}

/**
 * POST: 비밀번호 확인
 */
export async function postPwd(pk: string, body: type.IGetUserBody, token: string) {
  return userInstance.post(`/users/${pk}`, body, { headers: { "access-token": token } });
}

/**
 * PUT: 유저 정보 수정
 */
export async function modifyUser(pk: string, body: type.IModifyUserBody, token: string) {
  return userInstance.put(`/users/${pk}`, body, { headers: { "access-token": token } });
}

/**
 * DELETE: 유저 탈퇴
 */
export async function withdrawUser(pk: string, token: string) {
  return userInstance.delete(`/users/${pk}`, { headers: { "access-token": token } });
}

/**
 * PUT: 유저 비밀번호 수정
 */
export async function modifyUserPwd(pk: string, body: type.IModifyUserPwdBody, token: string) {
  return userInstance.put(`users/${pk}/change-pwd`, body, { headers: { "access-token": token } });
}

/**
 * GET: 배지 정보
 */
export async function getBadges(pk: string) {
  return userInstance.get(`users/${pk}/badges`);
}

/**
 * GET: 팔로우 가게 정보
 */
export async function getLikeStores(pk: string) {
  return userInstance.get(`users/${pk}/stores`);
}
/**
 * GET: 방문 예약 조회
 */
export async function getUserBooks(pk: string) {
  return userInstance.get(`users/${pk}/books`);
}
/**
 * DELETE: 방문 예약 조회
 */
export async function deleteUserBook(pk: string, book_id: string) {
  return userInstance.delete(`users/${pk}/books/${book_id}`);
}
/**
 * GET: 닉네임 정보 받기
 */
export async function getNickname(pk: string) {
  return userInstance.get(`users/${pk}/get-nickname`);
}
