# I Love Pork Cutlet Blog Project

## 프로젝트 개요
Vercel과 Supabase를 기반으로 하는 테크 블로그 `I Love Pork Cutlet` 개발 및 배포 프로젝트입니다.

## 기술 스택 (Tech Stack)

### 1. Frontend
- **Framework:** Next.js (App Router 기반)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Key Features:** React Server Components (RSC), SEO 최적화, ISR/SSR 활용

### 2. Backend (Serverless)
- **Runtime:** Deno (via Supabase Edge Functions)
- **Language:** TypeScript
- **Key Features:** 분산 배포(Edge-side), 낮은 지연 시간, 서버리스 아키텍처
- **Note:** Node.js API가 아닌 Deno 표준 라이브러리 및 `npm:` 지정자 사용

### 3. Database & Infrastructure
- **BaaS:** Supabase (PostgreSQL, Auth, Storage)
- **Deployment:** Vercel (PaaS)
- **ORM/Client:** Supabase Client (@supabase/supabase-js)

---

## 개발 규칙 (Development Rules)
- 모든 코드는 **TypeScript**를 사용하여 타입 안정성을 확보합니다.
- 프론트엔드 컴포넌트는 가급적 **Server Components**를 우선적으로 고려합니다.
- 백엔드 로직은 가능한 **Supabase Edge Functions**를 통해 처리하여 서버리스 아키텍처를 유지합니다.
- 모든 설명과 가이드는 한국어를 기본으로 합니다.
- **workspace** extension을 사용하여 **google drive** 에 접근할 때는 **i-love-pork-cutlet-blog**폴더와 그 폴더 내부의 파일에만 접근할 수 있습니다.
---

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->