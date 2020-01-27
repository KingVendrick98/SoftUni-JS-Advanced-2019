class Forum {
    constructor() {
        this._users = []
        this._questions = []
        this._id = 1
        this._loggedUsers = []
    }

    register(username, password, repeatPassword, email) {
        if (username == '' || password == '' || repeatPassword == '' || email == '') {
            throw new Error("Input can not be empty")
        }
        if (password !== repeatPassword) {
            throw new Error("Passwords do not match")
        }
        let user = this._users.filter(u => u.username === username || u.email === email)[0];
        if (!user) {
            let user = {
                username,
                password,
                email
            }
            this._users.push(user)
        } else {
            throw new Error("This user already exists!")
        }
        return `${username} with ${email} was registered successfully!`
    }
    login(username, password) {
        let user = this._users.filter(u => u.username === username)[0];

        if (!user) {
            throw new Error("There is no such user")
        }
        if (user.password === password) {
            this._loggedUsers.push(user);
            return `Hello! You have logged in successfully`
        }
    }
    logout(username, password) {
        let user = this._users.filter(u => u.username === username)[0];

        if (!user) {
            throw new Error("There is no such user")
        }
        if (user.password === password) {
            let indexOfUser = this._users.indexOf(user)
            this._loggedUsers, splice(indexOfUser, 1)
            return `You have logged out successfully`
        }
    }
    postQuestion(username, question) {
        let user = this._users.filter(u => u.username === username)[0];
        let loggStatus = this._loggedUsers.includes(user);

        if (!user || !loggStatus) {
            throw new Error("You should be logged in to post questions")
        }
        if (question === '') {
            throw new Error("Invalid question")
        }
        let currQuestion = {
            id: this._id,
            username: user.username,
            question: question,
            answers: []
        }
        this._id++
        this._questions.push(currQuestion);
        return "Your question has been posted successfully"
    }
    postAnswer(username, questionId, answer) {
        let user = this._users.filter(u => u.username === username)[0];
        let loggStatus = this._loggedUsers.includes(user);

        if (!user || !loggStatus) {
            throw new Error("You should be logged in to post answers")
        }
        if (answer === '') {
            throw new Error("Invalid answer")
        }
        let currentQuestion = this._questions.filter(q => q.id === q.questionId)[0];
        if (!currentQuestion) {
            throw new Error("There is no such question")
        }
        let resultAnswer = {
            username: user.username,
            answer: answer
        }
        currentQuestion['answers'].push(resultAnswer)
        return "Your answer has been posted successfully"
    }
}