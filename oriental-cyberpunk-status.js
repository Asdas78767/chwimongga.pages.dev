const orientalCyberpunkStatusSvg = `<svg width="1200" height="1600" viewBox="0 0 1200 1600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="neonGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ff00dd" />
      <stop offset="50%" stop-color="#bd00ff" />
      <stop offset="100%" stop-color="#00eaff" />
    </linearGradient>
    <radialGradient id="smokeGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(600 140) rotate(90) scale(140 620)">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
    </radialGradient>
    <pattern id="lattice" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M0 0H48V48H0Z" fill="none" stroke="#00eaff" stroke-width="0.6" opacity="0.25" />
      <path d="M0 24H48M24 0V48M0 0L48 48M48 0L0 48" stroke="#ff00dd" stroke-width="0.6" opacity="0.2" />
    </pattern>
    <filter id="textGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="0" stdDeviation="2" flood-color="#ff00dd" flood-opacity="0.7" />
      <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#00eaff" flood-opacity="0.6" />
    </filter>
    <filter id="textGlowStrong" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#ff00dd" flood-opacity="0.85" />
      <feDropShadow dx="0" dy="0" stdDeviation="7" flood-color="#00eaff" flood-opacity="0.8" />
    </filter>
  </defs>
  <style>
    <![CDATA[
    .title {
      font-family: "궁서", "궁서체", "Gungsuh", "Batang", "AppleMyungjo", "Nanum Myeongjo", "Noto Serif KR", "Times New Roman", serif;
      font-size: 46px;
      font-weight: 600;
      fill: #f8f5ff;
      letter-spacing: 1px;
    }
    .subtitle {
      font-family: "궁서", "궁서체", "Gungsuh", "Batang", "AppleMyungjo", "Nanum Myeongjo", "Noto Serif KR", "Times New Roman", serif;
      font-size: 19px;
      font-weight: 500;
      fill: #e5d8ff;
      letter-spacing: 1px;
    }
    .label {
      font-family: "궁서", "궁서체", "Gungsuh", "Batang", "AppleMyungjo", "Nanum Myeongjo", "Noto Serif KR", "Times New Roman", serif;
      font-size: 17px;
      font-weight: 500;
      fill: #9ffcff;
      letter-spacing: 0.6px;
    }
    .value {
      font-family: "궁서", "궁서체", "Gungsuh", "Batang", "AppleMyungjo", "Nanum Myeongjo", "Noto Serif KR", "Times New Roman", serif;
      font-size: 18px;
      font-weight: 500;
      fill: #ffffff;
      letter-spacing: 0.4px;
    }
    .glow {
      filter: url(#textGlow);
      animation: glowPulse 3.2s ease-in-out infinite;
    }
    .panel {
      fill: rgba(4, 4, 8, 0.8);
      stroke: url(#neonGradient);
      stroke-width: 1.6;
    }
    .panel-highlight {
      fill: rgba(255, 255, 255, 0.08);
    }
    .connector {
      stroke: url(#neonGradient);
      stroke-width: 1.2;
      opacity: 0.8;
    }
    .line {
      stroke: url(#neonGradient);
      stroke-width: 1;
      opacity: 0.7;
    }
    .asset {
      opacity: 0.45;
    }
    .asset-strong {
      opacity: 0.75;
    }
    @keyframes glowPulse {
      0%,
      100% {
        filter: url(#textGlow);
        opacity: 0.9;
      }
      50% {
        filter: url(#textGlowStrong);
        opacity: 1;
      }
    }
    ]]>
  </style>
  <rect width="1200" height="1600" fill="#050508" />
  <image href="https://i.ibb.co/SwyHjHKq/image.png" x="0" y="0" width="1200" height="1600" class="asset" preserveAspectRatio="xMidYMid slice" />
  <image href="https://i.ibb.co/p6myV3dR/image.png" x="0" y="0" width="1200" height="1600" class="asset-strong" preserveAspectRatio="xMidYMid slice" />
  <image href="https://i.ibb.co/0p48jnGh/image.png" x="0" y="0" width="1200" height="180" class="asset-strong" preserveAspectRatio="xMidYMid slice" />
  <image href="https://i.ibb.co/0p48jnGh/image.png" x="0" y="1420" width="1200" height="180" class="asset-strong" preserveAspectRatio="xMidYMid slice" />
  <image href="https://i.ibb.co/hRzS0g3V/2.png" x="70" y="300" width="100" height="100" class="asset" preserveAspectRatio="xMidYMid meet" />
  <image href="https://i.ibb.co/hRzS0g3V/2.png" x="1030" y="300" width="100" height="100" class="asset" preserveAspectRatio="xMidYMid meet" />
  <image href="https://i.ibb.co/JR26X6KD/3.png" x="70" y="980" width="100" height="100" class="asset" preserveAspectRatio="xMidYMid meet" />
  <image href="https://i.ibb.co/JR26X6KD/3.png" x="1030" y="980" width="100" height="100" class="asset" preserveAspectRatio="xMidYMid meet" />
  <image href="https://i.ibb.co/3Y85Rdxw/4.png" x="70" y="1260" width="100" height="100" class="asset" preserveAspectRatio="xMidYMid meet" />
  <image href="https://i.ibb.co/3Y85Rdxw/4.png" x="1030" y="1260" width="100" height="100" class="asset" preserveAspectRatio="xMidYMid meet" />
  <image href="https://i.ibb.co/7Nb2GF6c/image.png" x="90" y="40" width="180" height="130" class="asset-strong" preserveAspectRatio="xMidYMid meet" />
  <image href="https://i.ibb.co/XqDFfRh/image.png" x="880" y="580" width="200" height="200" class="asset" preserveAspectRatio="xMidYMid meet" />
  <image href="https://i.ibb.co/XqDFfRh/image.png" x="150" y="1100" width="180" height="180" class="asset" preserveAspectRatio="xMidYMid meet" />
  <image href="https://i.ibb.co/7dcv6k8T/image.png" x="320" y="18" width="560" height="160" class="asset-strong" preserveAspectRatio="xMidYMid meet" />

  <rect x="24" y="24" width="1152" height="1552" rx="28" fill="none" stroke="url(#neonGradient)" stroke-width="2.6" class="glow" />
  <rect x="40" y="40" width="160" height="160" fill="url(#lattice)" opacity="0.4" />
  <rect x="1000" y="40" width="160" height="160" fill="url(#lattice)" opacity="0.4" />
  <rect x="40" y="1400" width="160" height="160" fill="url(#lattice)" opacity="0.4" />
  <rect x="1000" y="1400" width="160" height="160" fill="url(#lattice)" opacity="0.4" />
  <path d="M120 250H320L340 230H500" class="connector" />
  <path d="M700 250H880L900 230H1080" class="connector" />
  <path d="M200 1370H420L440 1350H640" class="connector" />
  <path d="M760 1370H980L1000 1350H1100" class="connector" />

  <g>
    <rect x="100" y="90" width="1000" height="150" rx="24" class="panel" />
    <rect x="112" y="102" width="976" height="126" rx="22" class="panel-highlight" />
    <path d="M140 130C220 110 300 120 360 140C420 160 520 150 600 130C680 110 760 130 820 150C880 170 980 160 1040 132L1080 150L1080 200L140 200Z" fill="url(#smokeGradient)" opacity="0.35" />
    <text x="140" y="185" class="title glow">{{char_name}}</text>
    <text x="1060" y="175" text-anchor="end" class="subtitle glow">소속 {{affiliation}}</text>
  </g>

  <g>
    <rect x="100" y="270" width="1000" height="520" rx="24" class="panel" />
    <rect x="112" y="282" width="976" height="496" rx="22" class="panel-highlight" />
    <line x1="130" y1="350" x2="1070" y2="350" class="line" />
    <line x1="130" y1="410" x2="1070" y2="410" class="line" />
    <line x1="130" y1="470" x2="1070" y2="470" class="line" />
    <line x1="130" y1="530" x2="1070" y2="530" class="line" />
    <line x1="130" y1="590" x2="1070" y2="590" class="line" />
    <line x1="130" y1="650" x2="1070" y2="650" class="line" />
    <line x1="130" y1="710" x2="1070" y2="710" class="line" />
    <text x="140" y="335" class="label">혈통 <tspan class="value">{{bloodline}}</tspan></text>
    <text x="140" y="395" class="label">종족 <tspan class="value">{{species}}</tspan></text>
    <text x="140" y="455" class="label">성별 <tspan class="value">{{gender}}</tspan></text>
    <text x="140" y="515" class="label">외형 <tspan class="value">{{body_desc}}</tspan></text>
    <text x="140" y="575" class="label">능력 <tspan class="value">{{ability_desc}}</tspan></text>
    <text x="140" y="635" class="label">상호작용 <tspan class="value">{{interact_char}}</tspan></text>
    <text x="140" y="695" class="label">임무 <tspan class="value">{{mission}}</tspan></text>
  </g>

  <g>
    <rect x="100" y="820" width="1000" height="140" rx="24" class="panel" />
    <rect x="112" y="832" width="976" height="116" rx="22" class="panel-highlight" />
    <text x="140" y="870" class="label glow">휴대폰 알림</text>
    <text x="140" y="915" class="value">{{phone_msg}}</text>
  </g>

  <g>
    <rect x="100" y="990" width="1000" height="220" rx="24" class="panel" />
    <rect x="112" y="1002" width="976" height="196" rx="22" class="panel-highlight" />
    <line x1="140" y1="1095" x2="1060" y2="1095" class="line" />
    <text x="140" y="1065" class="label">자금 <tspan class="value">{{money}}</tspan></text>
    <text x="140" y="1155" class="label">소지품 <tspan class="value">{{items}}</tspan></text>
  </g>

  <g>
    <rect x="100" y="1250" width="1000" height="90" rx="20" class="panel" />
    <rect x="112" y="1262" width="976" height="66" rx="18" class="panel-highlight" />
    <line x1="350" y1="1265" x2="350" y2="1330" class="line" />
    <line x1="600" y1="1265" x2="600" y2="1330" class="line" />
    <line x1="850" y1="1265" x2="850" y2="1330" class="line" />
    <text x="140" y="1305" class="label">날짜 <tspan class="value">{{date}}</tspan></text>
    <text x="380" y="1305" class="label">시간 <tspan class="value">{{time}}</tspan></text>
    <text x="630" y="1305" class="label">날씨 <tspan class="value">{{weather}}</tspan></text>
    <text x="880" y="1305" class="label">위치 <tspan class="value">{{location}}</tspan></text>
  </g>
</svg>
`

module.exports = orientalCyberpunkStatusSvg;
