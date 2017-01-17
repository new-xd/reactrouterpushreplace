let count = 0;

const set = (num)=>{
    count = num
};

const get = ()=>{
    return count--
};

export default {
    set,
    get,
}