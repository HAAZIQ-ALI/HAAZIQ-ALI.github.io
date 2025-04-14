import React from "react";
import SectionTitle from "./SectionTitle";
import FeatureCard from "./FeatureCard";
import CodeBlock from "./CodeBlock";
import ShowcaseCard from "./ShowcaseCard";
import StepCard from "./StepCard";
import CommunityCard from "./CommunityCard";
import Footer from "./Footer";

export default function MainContent() {
  const features = [
    {
      icon: "fas fa-tachometer-alt",
      title: "High Performance",
      description: "Blazingly fast and efficient, utilizing modern GPU acceleration techniques."
    },
    {
      icon: "fas fa-th-large",
      title: "Dynamic Tiling",
      description: "Smart window management that adapts to your workflow automatically."
    },
    {
      icon: "fas fa-magic",
      title: "Beautiful Animations",
      description: "Smooth, configurable animations that don't sacrifice performance."
    },
    {
      icon: "fas fa-sliders-h",
      title: "Highly Configurable",
      description: "Extensive configuration options to make your desktop truly yours."
    },
    {
      icon: "fas fa-puzzle-piece",
      title: "Plugin Support",
      description: "Extend functionality with a growing ecosystem of community plugins."
    },
    {
      icon: "fas fa-keyboard",
      title: "Keyboard-Centric",
      description: "Optimized for keyboard usage with customizable key bindings."
    }
  ];

  const showcaseItems = [
    {
      title: "Minimal Development Setup",
      description: "A clean workspace for coding with terminal and editor."
    },
    {
      title: "Creative Workflow",
      description: "Design tools with beautiful wallpaper and widgets."
    }
  ];

  const steps = [
    {
      icon: "fas fa-download",
      title: "1. Install Hyprland",
      description: "Download and install from your package manager or build from source."
    },
    {
      icon: "fas fa-cog",
      title: "2. Configure",
      description: "Set up your configuration file to customize your experience."
    },
    {
      icon: "fas fa-paint-brush",
      title: "3. Customize",
      description: "Add themes, install plugins, and make it truly yours."
    }
  ];

  const codeExample = `# Example Hyprland configuration file

monitor=,preferred,auto,auto

input {
    kb_layout = us
    kb_variant =
    kb_model =
    kb_options = ctrl:nocaps
    kb_rules =

    follow_mouse = 1

    touchpad {
        natural_scroll = true
        disable_while_typing = true
    }

    sensitivity = 0.2
}

general {
    gaps_in = 5
    gaps_out = 10
    border_size = 2
    col.active_border = rgba(ec4899ee)
    col.inactive_border = rgba(1e293bee)

    layout = dwindle
    
    # Please see https://wiki.hyprland.org/Configuring/Tearing/ before you enable this
    allow_tearing = false
}

decoration {
    rounding = 8
    
    blur {
        enabled = true
        size = 6
        passes = 3
    }
    
    drop_shadow = true
    shadow_range = 15
    shadow_render_power = 3
    col.shadow = rgba(00000099)
}

animations {
    enabled = true

    animation = windows, 1, 3, default, slide
    animation = windowsOut, 1, 3, default, slide
    animation = border, 1, 10, default
    animation = fade, 1, 5, default
    animation = workspaces, 1, 4, default, slidevert
}`;

  return (
    <main className="flex-1 lg:ml-64 p-6 md:p-8 max-w-7xl mx-auto">
      {/* Welcome Section */}
      <section className="mb-12">
        <div className="rounded-lg border border-hypr-border bg-gradient-to-br from-hypr-bg/20 to-hypr-bg p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Welcome to <span className="text-hypr-accent">Hyprland</span>
          </h1>
          <p className="text-lg text-hypr-text/80 mb-6">
            A dynamic tiling Wayland compositor that doesn't sacrifice on its looks.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="bg-hypr-primary hover:bg-hypr-primary/80 px-4 py-2 rounded-md text-sm font-medium transition flex items-center"
            >
              <i className="fas fa-book-open mr-2"></i> Get Started
            </a>
            <a
              href="#"
              className="bg-hypr-sidebar hover:bg-hypr-sidebar/80 px-4 py-2 rounded-md text-sm font-medium transition flex items-center"
            >
              <i className="fab fa-github mr-2"></i> GitHub
            </a>
            <a
              href="#"
              className="bg-hypr-sidebar hover:bg-hypr-sidebar/80 px-4 py-2 rounded-md text-sm font-medium transition flex items-center"
            >
              <i className="fab fa-discord mr-2"></i> Discord
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-12">
        <SectionTitle icon="fas fa-star" title="Features" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      {/* Config Example Section */}
      <section className="mb-12">
        <SectionTitle icon="fas fa-code" title="Configuration Example" />
        <CodeBlock code={codeExample} />
      </section>

      {/* Showcase Section */}
      <section className="mb-12">
        <SectionTitle icon="fas fa-images" title="Showcase" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {showcaseItems.map((item, index) => (
            <ShowcaseCard
              key={index}
              index={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="mb-12">
        <SectionTitle icon="fas fa-rocket" title="Getting Started" />

        <div className="bg-hypr-sidebar rounded-lg border border-hypr-border p-6">
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-block bg-hypr-accent hover:bg-hypr-accent/80 px-6 py-2 rounded-md text-sm font-medium transition"
            >
              Read Installation Guide
            </a>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="mb-12">
        <SectionTitle icon="fas fa-users" title="Community" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CommunityCard
            icon="fab fa-github"
            title="GitHub"
            description="Contribute to the project, report issues, or check out the latest developments."
            stats={[
              { icon: "fas fa-star", text: "15.2k Stars", color: "text-yellow-400" },
              { icon: "fas fa-code-branch", text: "820 Forks" },
              { icon: "fas fa-exclamation-circle", text: "42 Issues" }
            ]}
            linkText="Visit Repository"
            linkUrl="#"
          />

          <CommunityCard
            icon="fab fa-discord"
            title="Discord"
            description="Join our community Discord server to get help, share your configs, and connect with other users."
            stats={[
              { icon: "fas fa-user", text: "8.5k Members" },
              { icon: "fas fa-comments", text: "Active Community" }
            ]}
            linkText="Join Discord"
            linkUrl="#"
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
