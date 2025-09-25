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
    const sparkleContainer = document.getElementById('sparkle-container');
    const haloEffect = document.getElementById('halo-effect');
    const presidentImageContainer = document.getElementById('president-image-container'); // 画像コンテナを取得

    let messageIndex = 0;

    // 後光エフェクトの位置を更新する関数
    function updateHaloPosition() {
        if (presidentImageContainer) {
            const imgRect = presidentImageContainer.getBoundingClientRect();
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

        for (let i = 0; i < 70; i++) {
            createSparkle();
        }
    });

    // 常にスパークルを生成
    setInterval(() => {
        createSparkle();
    }, 150);

    // 画面読み込み時とリサイズ時に後光エフェクトの位置を調整
    window.addEventListener('load', updateHaloPosition);
    window.addEventListener('resize', updateHaloPosition);

    // 画面読み込み時に最初のエフェクトを大量に生成
    for (let i = 0; i < 150; i++) {
        createSparkle();
    }

    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.classList.add('particle-sparkle');
        sparkle.textContent = '✨';
        
        sparkle.style.left = `${Math.random() * 100}vw`;
        sparkle.style.animationDuration = `${Math.random() * 3 + 4}s`;
        sparkle.style.fontSize = `${Math.random() * 1.5 + 1}em`;
        
        sparkleContainer.appendChild(sparkle);

        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
        });
    }
});
