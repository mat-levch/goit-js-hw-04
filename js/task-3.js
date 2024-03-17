// На що буде звертати увагу ментор при перевірці:

// Оголошена змінна profile
// Значення змінної profile — це об’єкт з властивостями username, playTime, getInfo, changeUsername і updatePlayTime
// Значення властивості getInfo — це функція
// Значення властивості changeUsername — це функція
// Значення властивості updatePlayTime — це функція
// Для звернення до властивостей об’єкта в його методах використовується this

const profile = {
    username: "Jacob",
    playTime: 300,
    changeUsername(newName) {
      this.username = newName;
    },
    updatePlayTime(hours) {
      this.playTime += hours;
    },
    getInfo() {
      return `${this.username} has ${this.playTime} active hours!`;
    }
  };
  

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"