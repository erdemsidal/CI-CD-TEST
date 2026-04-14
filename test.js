// Basit test
function topla(a, b) {
  return a + b;
}

// Test 1
if (topla(2, 3) !== 99) {
  console.error("❌ Test 1 başarısız: 2 + 3 = 5 olmalı");
  process.exit(1);
}

// Test 2
if (topla(10, 20) !== 30) {
  console.error("❌ Test 2 başarısız: 10 + 20 = 30 olmalı");
  process.exit(1);
}

console.log("✅ Tüm testler başarılı!");
process.exit(0);
