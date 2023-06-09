import { userInstance } from "..";
// import * as type from "./type";

/**
 * GET: 가게 정보
 */
export async function getStoreDetail(store_id: string, userId: string | undefined) {
  if (userId) return userInstance.get(`/stores/${store_id}`, { params: { userId: userId } });
  else return userInstance.get(`/stores/${store_id}`);
}
/**
 * GET: 가게의 동물 정보
 */
export async function getStoreAinmalList(store_id: string) {
  return userInstance.get(`/stores/${store_id}/animals`);
}
/**
 * GET: 가게의 실시간 방송 정보
 */
export async function getStoreBroadcastsList(store_id: string) {
  return userInstance.get(`/stores/${store_id}/broadcasts`);
}
/**
 * GET: 가게 체험프로그램 정보
 */
export async function getStorePlayList(store_id: string) {
  return userInstance.get(`/stores/${store_id}/plays`);
}
/**
 * POST: 가게 팔로우
 */
export async function followStore(uid: string, store_id: string) {
  return userInstance.post(`/stores/${store_id}`, { uid });
}
