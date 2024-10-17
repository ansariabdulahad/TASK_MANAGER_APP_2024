import User from "../models/User-model.js";

// register user
export const signupUser = async (req, res) => {
    try {
        const data = req.body;

        // check user exist
        const user = await User.findOne({ email: data.email });

        if (user) return res.status(401).json({
            success: false,
            message: "User already exists, please login"
        });

        // register user
        const newUser = new User(data);
        await newUser.save();

        newUser.password = "";
        res.status(201).json({
            success: true,
            message: "User registration successful",
            data: newUser,
            token: await newUser.generateToken(),
            userId: newUser._id.toString()
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User registration failed",
            error: error
        });
    }
}

// login user
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // find user
        const checkUser = await User.findOne({ email });

        if (!checkUser) return res.status(404).json({
            success: false,
            message: "User not found, please signup first!",
        });

        // compare password
        const checkPassword = await checkUser.compareUserPassword(password);
        if (!checkPassword) return res.status(401).json({
            success: false,
            message: "Invalid credentials, access denied!",
        });

        // make it loggedin
        checkUser.isLoggedIn = true;

        // generate token and send to client
        res.status(200).json({
            success: true,
            message: "User logged in successfully!",
            data: checkUser,
            token: await checkUser.generateToken(),
            userId: checkUser._id.toString()
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User registration failed",
            error: error
        });
    }
}