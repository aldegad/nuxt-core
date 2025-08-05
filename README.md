# @aldegad/nuxt-core

Vue 3와 Nuxt 3 기반의 핵심 UI 컴포넌트 라이브러리입니다. 제스처 인식, 오버레이 관리, 스크롤 뷰 등 다양한 인터랙티브 컴포넌트를 제공합니다.

## 📦 주요 기능

### 🎯 컴포넌트

- **ColorPicker**: 색상 선택 컴포넌트
- **Overlay**: 오버레이 시스템 (OverlayBackdrop, OverlayContextProvider 포함)
- **ScrollView**: 커스텀 스크롤 뷰 컴포넌트

### 🎮 제스처 시스템

- 제스처 인식 및 처리
- 임계값 기반 좌표 처리
- 제스처 컨텍스트 관리

### 🎨 유틸리티

- 날짜/숫자 포맷팅
- DOM 피벗 안전 처리
- 랜덤 UUID 생성
- Tailwind CSS 유틸리티
- Axios HTTP 클라이언트

## 🚀 설치

```bash
# npm
npm install @aldegad/nuxt-core

# pnpm
pnpm add @aldegad/nuxt-core

# yarn
yarn add @aldegad/nuxt-core

# bun
bun add @aldegad/nuxt-core
```

## 📖 사용법

### 기본 사용법

```typescript
import { ColorPicker, Overlay, ScrollView } from "@aldegad/nuxt-core";
import { useGesture, useOverlayContext } from "@aldegad/nuxt-core";
```

### 컴포넌트 사용 예시

```vue
<template>
  <div>
    <!-- 색상 선택기 -->
    <ColorPicker v-model="selectedColor" />

    <!-- 오버레이 시스템 -->
    <OverlayContextProvider>
      <Overlay v-model:visible="showOverlay">
        <div>오버레이 내용</div>
      </Overlay>
    </OverlayContextProvider>

    <!-- 스크롤 뷰 -->
    <ScrollView>
      <div>스크롤 가능한 내용</div>
    </ScrollView>
  </div>
</template>

<script setup>
import { ColorPicker, Overlay, OverlayContextProvider, ScrollView } from "@aldegad/nuxt-core";
import { ref } from "vue";

const selectedColor = ref("#000000");
const showOverlay = ref(false);
</script>
```

### Composables 사용 예시

```vue
<script setup>
import { useGesture, useOverlayContext } from "@aldegad/nuxt-core";

// 제스처 사용
const { gestureState } = useGesture();

// 오버레이 컨텍스트 사용
const { showOverlay, hideOverlay } = useOverlayContext();
</script>
```

## 🏗️ 프로젝트 구조

```
src/
├── components/          # Vue 컴포넌트
│   ├── ColorPicker.vue
│   ├── Overlay.vue
│   ├── OverlayBackdrop.vue
│   ├── OverlayContextProvider.vue
│   └── ScrollView.vue
├── composables/         # Vue Composables
│   ├── gesture/         # 제스처 관련
│   ├── useInheritAttrs.ts
│   ├── useOverlayContext.ts
│   ├── useResizeObserver.ts
│   └── useVueRoute.ts
├── schemas/            # 타입 정의
│   ├── coord.ts
│   ├── gesture.ts
│   ├── overlay.ts
│   └── pivot.ts
├── stores/             # Pinia 스토어
│   └── overlayStore.ts
├── utils/              # 유틸리티 함수
│   ├── format/         # 포맷팅 유틸리티
│   ├── gesture/        # 제스처 유틸리티
│   ├── axios.ts
│   ├── overlayDirective.ts
│   ├── safeDomPivot.ts
│   ├── safeRandomUUID.ts
│   ├── tw.ts
│   └── wait.ts
└── assets/             # 스타일 및 폰트
    ├── css/
    └── fonts/
```

## 🛠️ 개발 환경 설정

### 의존성 설치

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### 개발 서버 실행

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

개발 서버는 `http://localhost:3000`에서 실행됩니다.

### 빌드

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

### 프리뷰

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## 📋 주요 의존성

- **Vue 3.5.17**: 프론트엔드 프레임워크
- **Nuxt 3.17.7**: Vue.js 메타 프레임워크
- **Pinia 3.0.3**: 상태 관리
- **Tailwind CSS 4.1.11**: CSS 프레임워크
- **Axios 1.11.0**: HTTP 클라이언트
- **OverlayScrollbars 2.11.4**: 커스텀 스크롤바

## 🎨 스타일 가져오기

CSS 스타일을 직접 가져올 수 있습니다:

```typescript
import "@aldegad/nuxt-core/styles";
```

## 📝 라이센스

이 프로젝트는 private 패키지입니다.

## 🤝 기여하기

이 프로젝트는 workspace 패키지로 구성되어 있습니다. 개발 시에는 모노레포 구조를 참고하세요.
