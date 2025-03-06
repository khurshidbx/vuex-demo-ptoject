export default {
    registerCoach(context, data) {

        console.log(
            "Action is working"
        );
        
        const coachData = {
            id: context.rootGetters.userId,
            firstName: data.first,
            lastName: data.last,
            areas: data.areas,
            description:
                data.desc,
            hourlyRate: data.rate
        };

        context.commit('regesterCoach', coachData);
    }
}