module.exports = mongoose => {
    const Qup = mongoose.model(
        "qUp",
        mongoose.Schema(
            {
                username: String,
                game: String,
                kd: Number,
                playStyle: String,
                discord: Boolean,
            },
            { timestamps: true }
        )
    );

    return Qup;
};