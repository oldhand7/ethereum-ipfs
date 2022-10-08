export let currentItem = '';
export let clientSecure = "pi_3LM96eIghX2PVjSZ1hvDcO2j_secret_6enILvpnZjRyljoV5hAGH4Ag4";

export const setCurrentItem = (payload)=>{
    currentItem = payload;
}

export const setClientSecure = (payload)=>{
    clientSecure = payload;
}

