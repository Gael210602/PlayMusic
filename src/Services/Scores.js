import http from "./http-common";

class ScoresService {

    getScores(pk) {
        return http.get(`/gameVariable/${pk}/`);
    }
    getAttempts(pk) {
        return http.get(`/attempts/`);
    }
}

export default new ScoresService();
