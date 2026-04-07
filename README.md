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