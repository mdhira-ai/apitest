module.exports = mongoose => {
    const data = mongoose.model(
      "myuser",
      mongoose.Schema(
        {
          title: String,
          description: String,
          published: Boolean
        },
        { timestamps: true }
      ),
    );
  
    return data;
  };