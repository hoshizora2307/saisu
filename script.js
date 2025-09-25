document.addEventListener('DOMContentLoaded', () => {
    const praiseMessages = [
        "✨斉須社長のリーダーシップは、まさに光そのものです！✨",
        "🌟その卓越したビジョンに、私たちはただただ感銘を受けます！🌟",
        "💡革新への情熱は、常に私たちを導く道標です！💡",
        "🏆斉須社長のご功績に、深く敬意を表します！🏆",
        "🚀未来を切り拓くそのお力に、心からの感謝を込めて！🚀",
        "🙏斉須社長、永遠に我々の精神的支柱です！🙏"
    ];

    const praiseButton = document.getElementById('praise-button');
    const changeableMessage = document.getElementById('changeable-message');
    const sparkleContainer = document.getElementById('sparkle-container'); // 前景スパークル
    const bgSparkleContainer = document.getElementById('bg-sparkle-container'); // 背景スパークル
    const haloEffect = document.getElementById('halo-effect');
    const presidentImageContainer = document.getElementById('president-image-container');

    let messageIndex = 0;

    // 後光エフェクトの位置を更新する関数
    function updateHaloPosition() {
        if (presidentImageContainer) {
            const imgRect = presidentImageContainer.getBoundingClientRect();
            // 後光の中心を画像の中央に合わせる
            haloEffect.style.left = `${imgRect.left + imgRect.width / 2 - haloEffect.offsetWidth / 2}px`;
            haloEffect.style.top = `${imgRect.top + imgRect.height / 2 - haloEffect.offsetHeight / 2}px`;
        }
    }

    // ボタンをクリックした時のイベント
    praiseButton.addEventListener('click', () => {
        changeableMessage.innerHTML = praiseMessages[messageIndex];
        changeableMessage.style.animation = 'none';
        void changeableMessage.offsetWidth;
        changeableMessage.style.animation = 'fade-in-up 1.5s ease-out forwards';

        messageIndex = (messageIndex + 1) % praiseMessages.length;

        // 大量の前景スパークルを生成
        for (let i = 0; i < 70; i++) {
            createParticleSparkle(sparkleContainer);
        }
    });

    // 常に前景スパークルを生成
    setInterval(() => {
        createParticleSparkle(sparkleContainer);
    }, 150);

    // 常に背景スパークルを生成
    setInterval(() => {
        createBackgroundSparkle();
    }, 100); // より頻繁に発生させる

    // 画面読み込み時とリサイズ時に後光エフェクトの位置を調整
    window.addEventListener('load', updateHaloPosition);
    window.addEventListener('resize', updateHaloPosition);

    // 画面読み込み時に最初のエフェクトを大量に生成
    for (let i = 0; i < 150; i++) {
        createParticleSparkle(sparkleContainer);
    }
    for (let i = 0; i < 50; i++) { // 背景スパークルも初期生成
        createBackgroundSparkle();
    }


    function createParticleSparkle(container) { // 前景スパークル生成
        const sparkle = document.createElement('div');
        sparkle.classList.add('particle-sparkle');
        sparkle.textContent = '✨';
        
        sparkle.style.left = `${Math.random() * 100}vw`;
        sparkle.style.animationDuration = `${Math.random() * 3 + 4}s`;
        sparkle.style.fontSize = `${Math.random() * 1.5 + 1}em`; // サイズ調整
        
        container.appendChild(sparkle);

        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
        });
    }

    function createBackgroundSparkle() { // 背景スパークル生成
        const sparkle = document.createElement('div');
        sparkle.classList.add('bg-particle-sparkle'); // 背景用クラス
        sparkle.textContent = '✧'; // 小さな光の粒
        
        sparkle.style.left = `${Math.random() * 100}vw`;
        sparkle.style.top = `${Math.random() * 100}vh`; // 画面内のどこからでもスタート
        sparkle.style.animationDuration = `${Math.random() * 10 + 15}s`; // 長い時間でゆっくり動く
        sparkle.style.animationDelay = `-${Math.random() * 10}s`; // ランダムな遅延で最初からバラバラに動く
        sparkle.style.fontSize = `${Math.random() * 1 + 0.5}em`; // 小さめ
        
        bgSparkleContainer.appendChild(sparkle);

        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
        });
    }
});
