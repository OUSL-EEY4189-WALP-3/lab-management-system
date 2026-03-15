import Counter from "@/models/Counter";

export async function getNextSequence(name: String) {
    const counter = await Counter.findByIdAndUpdate(
        name,
        { $inc: { seq: 1 } },
        { new: true, upsert: true, setDefaultsOnInsert: true },
    );
    return counter.seq;
}
