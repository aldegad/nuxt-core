# @aldegad/nuxt-core

> **이 패키지는 [vue-packages 모노레포](https://github.com/aldegad/nuxt-packages)의 일부로, 루트 저장소에서 통합 관리됩니다.**

Vue 3 & Nuxt 3 기반의 컴포넌트 및 Composables 라이브러리입니다. 다른 Nuxt 프로젝트에서 재사용할 수 있도록, 제스처 인식, 오버레이, 커스텀 스크롤 등 실용적인 기능을 제공하며, 모바일 대응 및 퍼포먼스 최적화를 중점으로 설계되었습니다.

- **레포지토리:** [github.com/aldegad/nuxt-core](https://github.com/aldegad/nuxt-core)
- **모노레포:** [github.com/aldegad/nuxt-packages](https://github.com/aldegad/nuxt-packages)

## 설치

```bash
npm install @aldegad/nuxt-core
# 또는
yarn add @aldegad/nuxt-core
```

## 빠른 시작

```js
// 주요 컴포넌트 import
import { ColorPicker, Overlay, OverlayContextProvider, ScrollView } from "@aldegad/nuxt-core";
// 주요 composable import
import { useGesture, useOverlayContext } from "@aldegad/nuxt-core";
// 스타일 적용
import "@aldegad/nuxt-core/style.css";
```

## 주요 컴포넌트

- `ColorPicker`: 색상 선택
- `Overlay`, `OverlayContextProvider`: 오버레이 시스템
- `ScrollView`: 커스텀 스크롤 뷰

## 주요 Composables

- `useGesture`: 제스처 인식 (모바일 터치 최적화)
- `useOverlayContext`: 오버레이 컨텍스트

## 특징

### 🚀 퍼포먼스 최적화

- Vue 3의 Composition API 활용으로 번들 사이즈 최소화
- Tree-shaking 지원으로 필요한 기능만 포함
- 지연 로딩 및 코드 분할 최적화
- 메모리 효율적인 이벤트 관리

### 📱 모바일 대응

- 터치 제스처 및 멀티터치 지원
- 반응형 디자인 컴포넌트
- 모바일 브라우저 호환성 보장
- 터치 디바이스 최적화된 인터랙션

## 스타일 적용

```js
import "@aldegad/nuxt-core/style.css";
```

## 빌드 및 배포 (개발자용)

```bash
# 빌드
npm run build:lib
# 배포
npm publish --access public
```

## 프로젝트 구조

```
src/
├── components/   # Vue 컴포넌트
├── composables/  # Vue Composables
├── schemas/      # 타입 정의
├── stores/       # Pinia 스토어
├── utils/        # 유틸리티 함수
└── assets/       # 스타일 및 폰트
```

## 라이선스

MIT
