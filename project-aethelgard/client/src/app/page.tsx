import Link from 'next/link'

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 px-6">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent" />
                <div className="max-w-4xl mx-auto text-center relative">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                        Aethelgard
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-8">
                        게임 기획자를 위한 차세대 GDD 에디터
                    </p>
                    <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
                        스토리, 캐릭터, 아이템, 스킬 데이터를 체계적으로 관리하고,
                        AI 기반 도구로 기획 작업을 가속화하세요.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/studio"
                            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
                        >
                            스튜디오 시작하기
                        </Link>
                        <Link
                            href="/control"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-medium transition-all"
                        >
                            관제탑 둘러보기
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-16">주요 기능</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon="📝"
                            title="스토리 에디터"
                            description="분기형 스토리와 대화 스크립트를 시각적으로 편집하세요."
                        />
                        <FeatureCard
                            icon="⚔️"
                            title="데이터 관리"
                            description="아이템, 스킬, 캐릭터 스탯을 CSV/테이블로 관리합니다."
                        />
                        <FeatureCard
                            icon="🤖"
                            title="AI 어시스턴트"
                            description="기획 초안 작성, 밸런싱 제안을 AI가 도와드립니다."
                        />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-white/10">
                <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
                    © 2026 Aethelgard. Built for Game Designers.
                </div>
            </footer>
        </div>
    )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
    return (
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-colors">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    )
}
