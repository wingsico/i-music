import request from '@/common/utils/request';

export const fetchBannerList = () => {
  return request.get('/banner')
}

export const fetchRecommendList = () => {
  return request.get('/personalized')
}