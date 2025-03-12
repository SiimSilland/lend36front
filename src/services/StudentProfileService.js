import axios from "axios";

export default {
    async updateStudentProfile(userId, studentProfile) {
        try {
            const response = await axios.put('/student/profile', {
                userId: userId,
                ...studentProfile
            });
            return response;
        } catch (error) {
            throw error;
        }
    },

    async sendGetStudentProfile(userId) {
        try {
            const response = await axios.get('/student/profile', {
                params: { userId }
            });
            return response;
        } catch (error) {
            throw error;
        }
    }
}